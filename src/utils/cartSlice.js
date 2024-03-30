import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]  // initially the cart is empty, initially the portion of the store (slice) will be empty
    },
    // reducer function corresponding to each action (think of action as API to communicate with store)
    reducers:{ // reducer function modifies the slice of the store
        addItem :(state, action) =>{ // modify state based on action
            // We have to mutate the state
            state.items.push(action.payload) // we will get this payload when dispatch

        },

        removeItem: (state) =>{
            state.items.pop() //removing one item from the top
        },

        clearCart: (state) =>{
            state.items.length = 0;

        }


    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions; // exported our actions
export default cartSlice.reducer; // exported our reducer