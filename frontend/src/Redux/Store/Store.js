import { configureStore } from '@reduxjs/toolkit'
import createReducer from '../SliceReducer/CreateReducer'
import adminSlice from '../SliceReducer/adminSlice';

const store = configureStore({
  reducer: {
    user: createReducer,
    userAdmin:adminSlice
  },
})

export default store;