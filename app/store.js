import { createStore, applyMiddleware } from "redux";
import reducers from "./app/reducers";
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
 };
 
 const persistReducers = persistReducer(persistConfig, reducers);

 export const store = createStore(persistReducers,composeWithDevTools(applyMiddleware(logger)));
 export const persistor = persistStore(store);
