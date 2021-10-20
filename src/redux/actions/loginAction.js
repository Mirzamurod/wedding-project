import { LOGIN } from "../tools/constanta";

export const updateState = (data) => {
    return{
        type: LOGIN,
        payload: data
    }
}