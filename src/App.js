import React from 'react';
import './App.scss';
import styled from 'styled-components';
import SimpleTabs from './Components/Tabs/tabs.js'
// import Header from './components/Header/header';
import Footer from './Components/Footer/footer';
import Nav from './Components/Nav/nav';










// styles

const MainStyles = styled.div`
    background:white;
    color:#fac8c8;
    font-family:sans-serif;
    font-size:1rem;
    padding:25px;
    margin:0 auto;
`


const App = props => {
  
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
    else if (item.isDebtEditing === true) {
      props.calcDebtAC(item);
    }
  }

  return (
    <MainStyles>
    <div className="App">
      {/* <Header /> */}
      <Nav/>

      <SimpleTabs/>

    <div>
      
      {/* <div>{props.obj.monthly_security} {props.obj.phone_change}</div> */}
    </div>

      <Footer />

    </div>
    </MainStyles>
  );
}
export default App;