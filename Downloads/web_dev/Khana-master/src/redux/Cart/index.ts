import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "./types";
import { CaterorOptions, OptionType } from "../../types/Types";
import { isEqual } from "lodash";

export const cart = createSlice({
    name: "CART",
    initialState: {
        cart: {},
        cartTotal: 0,
    } as Cart,
    reducers: {
        add: (state, { payload: option }: PayloadAction<CaterorOptions>) => {
            const key: string = Object.keys(option)[0];
            let optionToAdd: OptionType = option[key][0];
            // if its already init
            if (state.cart[key] !== undefined) {
                for (let i = 0; i < state.cart[key].length; i++) {
                    let opt: OptionType = state.cart[key][i];

                    if (opt.header === optionToAdd.header) {
                        state.cart[key][i].count = optionToAdd.count;
                        state.cart[key][i].deliveryDate = optionToAdd.deliveryDate;
                        state.cartTotal += optionToAdd.price;
                        state.cartTotal = parseFloat(state.cartTotal.toFixed(2));
                        return state;
                    }
                }
                state.cart[key].push(optionToAdd);
            }
            // first time
            else {
                state.cart[key] = option[key];
            }

            state.cartTotal += optionToAdd.price;
            state.cartTotal = parseFloat(state.cartTotal.toFixed(2));

            return state;
        },
        remove: (state, { payload: option }: PayloadAction<CaterorOptions>) => {
            const key: string = Object.keys(option)[0];
            const optionToDel: OptionType = option[key][0];

            if (state.cart[key] !== undefined) {
                for (let i = 0; i < state.cart[key].length; i++) {
                    let opt: OptionType = state.cart[key][i];

                    if (opt.header === optionToDel.header) {
                        state.cartTotal -= optionToDel.price;
                        state.cartTotal = parseFloat(state.cartTotal.toFixed(2));
                        state.cart[key][i].count = optionToDel.count;
                        if (state.cart[key][i].count === 0) {
                            delete state.cart[key][i];
                            // after delete the entry is replaced with a null
                            // filter it out
                            state.cart[key] = state.cart[key].filter((e) => { return e != null });
                        }

                        return state;
                    }
                }
            }
            return state;


        },
        removeAll: (state) => {
            state.cart = {};
            return state;
        }
    }
});

export const CART_ACTIONS = cart.actions;
