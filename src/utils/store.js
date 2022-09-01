import { configureStore } from '@reduxjs/toolkit'
import userIdReducer from './slices/userIdSlice'

export default configureStore({
    reducer: {
        user: userIdReducer,
    }
})