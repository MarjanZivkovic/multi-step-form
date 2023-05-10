import { createContext, useState } from "react";

const formContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [monthly, setMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  function getName(e){
    setName(', ' + e.target.value);
  }

  function selectPeriodHandler() {
    setMonthly((prevState) => !prevState);
    setSelectedPlan(null);
    setSelectedAddOns([]);
  }
  
  function selectPlanHandler(e) {
    monthly
    ? setSelectedPlan({ name: e.target.dataset.name, price: e.target.value })
    : setSelectedPlan({
      name: e.target.dataset.name,
      price: e.target.value * 10,
    });
    setSelectedAddOns([]);
  }

  function selectAddOnsHandler(e) {
    const addOnName = e.target.name;
    const addOnPrice = e.target.dataset.price;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedAddOns((prevState) => [
        ...prevState,
        { name: addOnName, price: addOnPrice, checked: true },
      ]);
    } else {
      setSelectedAddOns((prevState) =>
        prevState.filter((addOn) => addOn.name !== addOnName)
      );
    }
  }

  function resetSelectedAddOns(){
    setSelectedAddOns([]);
  }
  

  return (
    <formContext.Provider
      value={{
        name,
        monthly,
        selectedPlan,
        selectedAddOns,
        getName,
        selectPeriodHandler,
        selectPlanHandler,
        selectAddOnsHandler,
        resetSelectedAddOns
      }}
    >
      {children}
    </formContext.Provider>
  );
};

export default formContext;
