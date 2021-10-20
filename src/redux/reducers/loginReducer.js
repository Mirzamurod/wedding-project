import { LOGIN } from "../tools/constanta"

const initialState = {
    isLogin: false
}

export const loginReducer = (state = initialState, action) => {
    if(action.type === LOGIN){
    return {
        ...state,
        ...action.payload
    }
}
    return state
}