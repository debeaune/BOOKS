import {createStore,combineReducers} from 'redux'
import reducerAddBooks from './reducers/reducerAddBooks'

const rootreducer = combineReducers({
    library:reducerAddBooks
})

const store = createStore(rootreducer)

export default store
