import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import formContext from "../context/form-context";

function Home() {
  const { getName } = useContext(formContext);

  const navigate = useNavigate();

  
  function submitHandler(e){
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    let validArr = [];
    inputs.forEach(input => {
      if(input.value === ''){
        input.style.borderColor = 'var(--strawberry-red)';
        input.previousElementSibling.children[1].textContent = 'This field is required';
      } else {
        validArr.push('valid')
        input.style.borderColor = 'var(--cool-gray)';
        input.previousElementSibling.children[1].textContent = '';
      }
    })
    
    if(validArr.length >= 3){
      navigate('/select-plan');
    }
  }

  return <main className="form-container">
    <form className="form" onSubmit={submitHandler}>
      <div className="form-data">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <div className="input-div">
          <label htmlFor="name"><span>Name</span> <span>&nbsp;</span></label>
          <input type="text" id="name" placeholder="e.g. Stephen King" onChange={getName}/>
        </div>
        <div className="input-div">
          <label htmlFor="email"><span>Email Address</span> <span>&nbsp;</span></label>
          <input type="email" id="email" placeholder="e.g. stephenking@lorem.com"/>
        </div>
        <div className="input-div">
          <label htmlFor="number"><span>Phone Number</span> <span>&nbsp;</span></label>
          <input type="number" id="number" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
      <div className="form-submit">
        <div>&nbsp;</div>
        <button type="submit" className="submit-btn">Next Step</button>
      </div>
    </form>
  </main>
}

export default Home;
