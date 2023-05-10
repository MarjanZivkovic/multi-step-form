import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import formContext from "../context/form-context";


function Overview() {
  const { monthly, selectedPlan, selectedAddOns, resetSelectedAddOns } = useContext(formContext);

  const navigate = useNavigate();


  function submitHandler(e){
    e.preventDefault();
    selectedPlan && navigate('/thank-you');
    resetSelectedAddOns();
  }

  return (
    <main className="form-container">
        <form className="form" onSubmit={submitHandler}>
          <div className="form-data">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className='overview-div'>
              <div>
                <div className="overview-plan">
                  <div>
                    {selectedPlan ? selectedPlan.name : "Please select a plan!"} {monthly ? "(Monthly)" : "(Yearly)"}
                  </div>  <Link to='/select-plan'>Change</Link>
                </div>
                <div className="overview-price">
                  ${selectedPlan && selectedPlan.price}/{monthly ? 'mo' : 'yr'}
                </div>
              </div>
              <ul>
                {selectedAddOns.length > 0 ? (selectedAddOns.map( addOn => (
                  <li key={addOn.name}>
                    <span>{addOn.name}</span> <span className="overview-price">+${addOn.price}/{monthly ? 'mo' : 'yr'}</span>
                  </li>
                ))) : <div style={{margin: '1rem 0'}}>No add-ons selected. <Link to='/add-ons'>Change</Link></div>}
              </ul>
            </div>  
            <div className='total-div'>
              <span className='total'>Total (per {monthly ? 'month' : 'year'})</span> <span className='total-price'>${selectedPlan && +selectedPlan.price + (+selectedAddOns.reduce((acc, cur) => acc + (+cur.price), 0))}/{monthly ? 'mo' : 'yr'}</span>
            </div>
          </div>
          <div className="form-submit">
            <div onClick={resetSelectedAddOns}><Link to='/add-ons' className="cool-gray">Go Back</Link></div>
            <button type="submit" className="submit-btn confirm-btn" disabled={!selectedPlan ? true : false } title={!selectedPlan ? 'Please, select a plan' : ''}>Confirm</button>
          </div>
        </form>
      </main>
  )
}

export default Overview