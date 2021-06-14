import React, { createContext,useReducer ,useEffect} from 'react'
import ShoppingCart from './ShoppingCart'
import { Data } from './ItemApi';
import {reducer} from './Reducer';
export const CartContext=createContext();
const initialState={
    item:Data,
    totalAmount:0,
    totalItem:0,
};
const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const removeItem=(id)=>{
        return dispatch({
            type:"REMOVE_ITEM",
            payload:id,
        });
    };
    const incrementItem=(id)=>{
        return dispatch({
            type:"INCREMENT_ITEM",
            payload:id,
        });
    }
    const decrementItem=(id)=>{
        return dispatch({
            type:"DECREMENT_ITEM",
            payload:id,
        });
    }
    useEffect(() => {
        return dispatch({
            type:"GET_TOTAL",
        });
    }, [state.item])
    return (
        <>
            <CartContext.Provider value={{...state,removeItem,incrementItem,decrementItem}}>
                <ShoppingCart/>
            </CartContext.Provider>
        </>
    )
}

export default Cart
