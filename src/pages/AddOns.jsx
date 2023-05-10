import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import formContext from "../context/form-context";

function AddOns() {
  const { monthly, selectAddOnsHandler, resetSelectedAddOns } = useContext(formContext);

  const navigate = useNavigate();


  function  submitHandler(e) {
    e.preventDefault();
    navigate('/finishing-up');
  }


  return (
      <main className="form-container">
        <form className="form" onSubmit={submitHandler}>
          <div className="form-data">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className="checkbox-div">
              <div className='checkbox-flex'> 
                <input type="checkbox" id="service-checkbox" name="Online service" data-price={monthly ? 1 : 10} onChange={selectAddOnsHandler} />
                <label htmlFor="service-checkbox" className='add-on-checkbox'>
                  <div>
                    <h3>Online service</h3>
                    <p className='small'>Access to multiplayer games</p>
                  </div>
                  <div className="add-price">{monthly ? '+$1/mo' : '+$10/yr' }</div>
                </label>
              </div>
              <div className='checkbox-flex'> 
                <input type="checkbox" id="storage-checkbox" name="Larger storage" data-price={monthly ? 2 : 20} onChange={selectAddOnsHandler} />
                <label htmlFor="storage-checkbox" className='add-on-checkbox'>
                  <div>
                    <h3>Larger storage</h3>
                    <p className='small'>Extra 1TB of cloud save</p>
                  </div>
                  <div className="add-price">{monthly ? '+$2/mo' : '+$20/yr' }</div>
                </label>
              </div>
              <div className='checkbox-flex'> 
                <input type="checkbox" id="customize-checkbox" name="Customizable Profile" data-price={monthly ? 2 : 20} onChange={selectAddOnsHandler} />
                <label htmlFor="customize-checkbox" className='add-on-checkbox'>
                  <div>
                    <h3>Customizable Profile</h3>
                    <p className='small'>Custom theme on your profile</p>
                  </div>
                  <div className="add-price">{monthly ? '+$2/mo' : '+$20/yr' }</div>
                </label>
              </div>
            </div>
          </div>
          <div className="form-submit">
            <div onClick={resetSelectedAddOns}><Link to='/select-plan' className="cool-gray">Go Back</Link></div>
            <button type="submit" className="submit-btn">Next Step</button>
          </div>
        </form>
      </main>
  ) 
}

export default AddOns;