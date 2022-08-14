import { createSlice } from '@reduxjs/toolkit'
//import { rememberMe } from '../selectors'

/*import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer*/

//initial state of user
const initialState = {
    status: 'void',
    rememberMe: localStorage.getItem('ARGENTBANK_rememberMe') === 'true' || false,
    error: null,

    infos: {
        firstNmae: null,
        lastName: null,
        id: null, 
        email: null,
        createdAt: null,
    },

    /*transactions : {

    }*/
}

/* ------functions in order to distribute the actions in the user reducer ------ */

/**
 * RememberMe option (manage value)
 * Take a value, dispatch an action in the store, and save the obtained value in local storage
 * @param {boolean} value - definition of value
 * @returns A function that takes the dispatch as an argument
 */

export function setRememberMe(value) {
    return(dispatch) => {
        dispatch(remember(value))
        localStorage.setItem('ARGENTBANK_rememberMe', value)
    }
}