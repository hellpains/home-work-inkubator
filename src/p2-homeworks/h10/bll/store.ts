import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
     loadingReducer,

})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
