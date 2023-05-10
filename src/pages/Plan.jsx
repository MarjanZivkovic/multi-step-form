import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import formContext from "../context/form-context";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";


function Plan() {
  const { monthly, selectedPlan, selectPeriodHandler, selectPlanHandler } = useContext(formContext);

  const navigate = useNavigate();
  
  function submitHandler(e){
    e.preventDefault();
    selectedPlan ? navigate('/add-ons') : alert('Please, select your plan!');
  }

  return (
      <main className="form-container">
        <form className="form" onSubmit={submitHandler}>
          <div className="form-data">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className="radio-div">
              <div className="radio-container">
                <input type="radio" name="plan" id="plan-arcade" value="9" data-name="Arcade" onChange={selectPlanHandler}/>
                <label htmlFor="plan-arcade">
                  <img src={arcade} alt="arcade-icon" />
                  <div>
                    <span className="plan-name">Arcade</span> 
                    {monthly ? <span className="plan-price cool-gray">$9/mo</span> : <span className="plan-price cool-gray">$90/yr</span>}
                    {monthly ? '' : <div className="small">2 months free</div>} 
                  </div>
                </label>  
              </div>
              <div className="radio-container">
                <input type="radio" name="plan" id="plan-advance" value="12" data-name="Advanced" onChange={selectPlanHandler}/>
                <label htmlFor="plan-advance">
                  <img src={advanced} alt="advance-icon" />
                  <div>
                    <span className="plan-name">Advanced</span> 
                    {monthly ? <span className="plan-price cool-gray">$12/mo</span> : <span className="plan-price cool-gray">$120/yr</span>}
                    {monthly ? '' : <div className="small">2 months free</div>} 
                  </div>
                </label>  
              </div>
              <div className="radio-container">
                <input type="radio" name="plan" id="plan-pro" value="15" data-name="Pro" onChange={selectPlanHandler}/>
                <label htmlFor="plan-pro">
                  <img src={pro} alt="pro-icon" />
                  <div>
                    <span className="plan-name">Pro</span> 
                    {monthly ? <span className="plan-price cool-gray">$15/mo</span> : <span className="plan-price cool-gray">$150/yr</span>}
                    {monthly ? '' : <div className="small">2 months free</div>} 
                  </div>
                </label>  
              </div>
            </div>
            <div className="checkbox-div">
              <div className="checkbox">
                <span className={monthly ? '' : 'cool-gray'}>Monthly</span> 
                <input type="checkbox" id="plan-checkbox" value={monthly} onChange={selectPeriodHandler}/>
                <label className="checkbox-holder" htmlFor="plan-checkbox">
                  <span className={`checkbox-ball ${!monthly ? 'checked' : ''}`}>&nbsp;</span>
                </label>
                <span className={!monthly ? '' : 'cool-gray'}>Yearly</span> 
              </div>
            </div>
          </div>
          <div className="form-submit">
            <div><Link to='/' className="cool-gray">Go Back</Link></div>
            <button type="submit" className="submit-btn" disabled={!selectedPlan ? true : false } title={!selectedPlan ? 'Please, select a plan' : ''}>Next Step</button>
          </div>
        </form>
      </main>
  )
}

export default Plan;