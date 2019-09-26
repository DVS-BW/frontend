import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

const DVtheme = {
    primary:'#800080',
    secondary:'white',
    third:'#2D182E',
}

const Button =styled.button`
    font-family:sans-serif;
    font-size: 1.5rem;
    border:#2D182E;
    border-radius:25px;
    background: ${props => props.secondary};
    color: ${props=>props.third};
`
// const DIVwrapper= styled.FoodCosts`
//     font-family:sans-serif;
//     font-size:2rem;
//     border:none;
//     background:${props => props.secondary};
//     color:${props => props.third};
// `
// const Food=styled.FoodForm`
//     font-family:sans-serif;
//     font-size:1.5rem;
//     color:${props=>props.primary};
//     background:${props=>props.secondary};
// `

const FoodCosts = props => {
    const [foodCost, setFoodCost]=useState({});

    const changeHandler = event =>{
        let val = parseFloat(event.target.value);
        if (isNaN(val)) {
            setFoodCost({[event.target.name]: ''})
        }
        else {
        setFoodCost({
            ...foodCost,
            isFoodEditing: true, 
            [event.target.name]: val
        })}
    }

    return(
        <Formik>
            {/* <ThemeProvider theme={DVtheme}> */}
        <Form onSubmit={(e) => {props.submitHandler(e, foodCost)}}>
            {/* <DIVwrapper primary className='FoodCosts'> */}
                <h4>Food Expenses</h4>
                {/* <Food className='FoodForm'> */}
                <label> Monthly Food Expenses:
                    <Field
                    type='text'
                    className='Monthly-costs'
                    name='monthly_costs'
                    placeholder='$ Ongoing Monthly Expense'
                    value={foodCost.monthly_costs}
                    onChange={changeHandler}/>
                </label>

                <label>One Time Stock Up Expense:
                    <Field
                    type='text'
                    className='Stock-up'
                    name='stock_up'
                    placeholder='$ One time cost to stock up'
                    value={foodCost.stock_up}
                    onChange={changeHandler}/>
                </label>

                <label>Dine Out Expense:
                    <Field
                    type='text'
                    className='DineOut'
                    name='dineout'
                    placeholder='Monthly Dining Cost'
                    value={foodCost.dineout}
                    onChange={changeHandler}/>
                </label>     
                <Button type='submit'>Next</Button>
                {/* </Food> */}
            {/* </DIVwrapper> */}
            
        </Form>
        {/* </ThemeProvider> */}
        </Formik>
    )
}

export default FoodCosts;


