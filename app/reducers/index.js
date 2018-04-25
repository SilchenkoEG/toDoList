import { combineReducers } from 'redux';
import arrayList from './arrayList';
import reducer from './routers';

const reducers =  combineReducers({
    arrayList,
    reducer
});

export default  reducers;