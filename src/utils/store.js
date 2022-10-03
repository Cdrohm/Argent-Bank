import { configureStore } from '@reduxjs/toolkit'
import userIdReducer from './slice/userIdSlice'

export default configureStore({
    reducer: {
        user: userIdReducer,
    }
})