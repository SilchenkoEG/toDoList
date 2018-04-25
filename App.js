import React, { Component } from "react";
import { View, Text, StyleSheet, Buttom } from "react-native";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider, connect } from "react-redux";
import TodoApp from "./app/containers/TodoApp";
import Completed from "./app/containers/Completed";
import reducers from "./app/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Router, Scene } from "react-native-router-flux";
import TabIcon from "./app/view/TabIcon";


const RouterWithRedux = connect()(Router);

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
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux >
          <Scene key="root" tabs activeTintColor={"black"} activeBackgroundColor='blue' tabBarPosition={'up'}  style={styles.tabBar}>
              <Scene key="TodoApp" title="Todo list"  component={TodoApp} hideNavBar />
              <Scene key="Completed" title="Completed list" component={Completed}  hideNavBar   />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
