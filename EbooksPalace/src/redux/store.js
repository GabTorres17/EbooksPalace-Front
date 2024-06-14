import { configureStore } from '@reduxjs/toolkit'
import propertiesReducer from './reducer'
export default configureStore({
  reducer:{
    properties: propertiesReducer
  },
})