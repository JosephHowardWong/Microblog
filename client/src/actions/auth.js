import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
    try {

        // console.log(formData);
        // console.log(history);
        // console.log("here")

        const { data } = await api.signIn(formData);

        // console.log(data);
        // console.log("here")


        dispatch({ type: AUTH, data })

        history.push('/');
    } catch(error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data })

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}