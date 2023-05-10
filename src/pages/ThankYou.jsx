import { useContext } from 'react';
import checkMark from '../images/icon-thank-you.svg';
import formContext from "../context/form-context";

function ThankYou() {
  const { name } = useContext( formContext );

  return (
    <main className="form-container thank-you-container">
      <div className="form-data thank-you-data">
        <img src={checkMark} alt="checkmark" />
        <h1>Thank you{name}!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
      <div className="form-submit attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/MarjanZivkovic" target='_blank' rel="noreferrer">Marjan</a>.
      </div>
    </main>
  )
}

export default ThankYou