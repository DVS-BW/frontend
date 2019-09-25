import { CALC_SECURITY, CALC_HEALTH } from "../actions";



export const initialState = {
    totalCost: 0,
    debt: {},
    health: {
        monthly_health_expenses: 0,
        medication_costs: 0,
        health_insurance_costs: 0,
        isHealthEditing: false
    },
    food: {
        monthly_food: 0,
        stock_up: 0,
        dine_out: 0,
        isFoodEditing: false
    },
    security: {
        monthly_security: 0,
        phone_change: 0,
        extra_security: 0,
        locks_change: 0,
        isSecurityEditing: false
    },
    transportation: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CALC_SECURITY:
            return {
                ...state,
                totalCost: state.totalCost + action.payload.monthly_security + action.payload.phone_change + action.payload.extra_security + action.payload.locks_change,
                security: {
                    monthly_security: action.payload.monthly_security,
                    phone_change: action.payload.phone_change,
                    extra_security: action.payload.extra_security,
                    locks_change: action.payload.locks_change,
                    isSecurityEditing: false
                }
            }

        case CALC_HEALTH: 
            return {
                ...state,
                totalCost: state.totalCost + action.payload.monthly_health_expenses + action.payload.medication_costs + action.payload.health_insurance_costs,
                health: {
                    monthly_health_expenses: action.payload.monthly_health_expenses,
                    extra_security: action.payload.extra_security, 
                    health_insurance_costs: action.payload.health_insurance_costs,
                    isHealthEditing: false
                }
            }

        default: 
        return state;
    }
}