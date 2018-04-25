import React, { Component } from "react";
import { View, Text, StyleSheet, Buttom,AsyncStorage } from "react-native";
import logger from "redux-logger";
import { Provider, connect } from "react-redux";
import TodoApp from "./app/containers/TodoApp";
import Completed from "./app/containers/Completed";
import { composeWithDevTools } from "redux-devtools-extension";
import { Router, Scene } from "react-native-router-flux";
import TabIcon from "./app/view/TabIcon";
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
 const store = createStore(persistReducers,composeWithDevTools(applyMiddleware(logger)));
 const persistor = persistStore(store);

const RouterWithRedux = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux persistor={persistor} >
          <Scene key="root" tabs activeTintColor={"black"} activeBackgroundColor='blue' tabBarPosition={'up'}  style={styles.tabBar}>
              <Scene key="TodoApp" title="Todo list"  component={TodoApp} hideNavBar />
              <Scene key="Completed" title="Completed list" component={Completed}  hideNavBar   />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  routerBtn: {
    backgroundColor: "white"
  },
  leftBnt : {
    backgroundColor: "black"
  },
  tabBar: {
    height : 50,
    marginTop : 20
  }
});
