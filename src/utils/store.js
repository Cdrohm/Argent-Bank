import { configureStore } from '@reduxjs/toolkit'
import userIdReducer from './slice/userIdSlice'

// Pour connecter les Redux Devtools on utilise
// un fonction disponible sur l'objet window
// Si cette fonction existe on l'exécute.
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
export default configureStore({
    reducer: {
        user: userIdReducer,
    }
})