import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import audioPlayerReducer from './reducers/audioPlayer'
const store = configureStore({
    reducer:{
        audioPlayer: audioPlayerReducer,
    }
})
export default store