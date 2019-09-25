import React from 'react';
import {connect} from 'react-redux';
import './App.scss';
// import Header from './components/Header/header';
import Nav from './Components/Nav/nav';
import { calcDebtAC } from './actions';
import HealthCosts from './Components/Health/health';
// import Debt from './components/Debt/debt';
import FoodCosts from './Components/Food/food';
import HealthCosts from './Components/Health/health';
import SecurityCosts from './Components/Security/security';
import TransCosts from './Components/Transportation/transportation';

import { calcSecurityAC, calcHealthAC, calcFoodAC, calcTransAC } from './actions';
// import Food from './components/Food/food';








// import Footer from './components/Footer/footer';


const App = props => {
  
  //CAN'T COMBINE THESE...MUST MAKE A CONDITIONAL
  const submitHandler = (e, item) => {
    console.log('made it to SubmitHandler', item)
    e.preventDefault();
    if (item.isHealthEditing === true ) {
      props.calcHealthAC(item);
    }
    else if (item.isSecurityEditing === true) {
      props.calcSecurityAC(item);
    }
    else if (item.isFoodEditing === true) {
      props.calcFoodAC(item);
    }
    else if (item.isTransEditing === true) {
      props.calcTransAC(item);
    }
  }

  return (
    <div className="App">

 
      


      {/* <Header /> */}
      <Nav />


      {/* <Debt /> */}
      {/* <Food /> */}

      <HealthCosts /> 
      {/*<SecurityCosts />*/}

      {/* <Footer /> */}

      <FoodCosts 
      submitHandler={submitHandler}/>

 

      <HealthCosts
      submitHandler={submitHandler}/>

      {/*<SecurityCosts 
      submitHandler={submitHandler} />*/}

      <TransCosts 
      submitHandler={submitHandler} />

    <div>
      <h1>Total cost is ${props.totalCost}.</h1>
      {/* <div>{props.obj.monthly_security} {props.obj.phone_change}</div> */}
    </div>

      {/* <Footer /> */}

    </div>
  );
}

//Helper function that tells connector (below) which pieces of state we need.
const mapStateToProps = state => {
  return {
    totalCost: state.totalCost,
    obj: state.security
  }
}

//Connect will join this component with the state from Redux.
export default connect(
  mapStateToProps,
  {calcSecurityAC, calcHealthAC, calcFoodAC, calcTransAC }
  )(App);