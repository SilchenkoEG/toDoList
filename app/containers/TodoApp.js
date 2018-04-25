import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Button,
  ScrollView,AsyncStorage
} from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addList, deleteTask, doneTask } from "../actions/toDoList";

export class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoText: "",
      value : ''
    };
  }

  handlerAddNewList = e => {
    this.props.addList(e.nativeEvent.text);
    this.setState({ todoText: "" });
  };
  handlerDeleteTask = id => {
    this.props.deleteTask(id);
  };
  handlerDoneTask = id => {
    this.props.doneTask(id);
  };
  render() {
    console.log(this.state.value)
    return (
      <ScrollView style ={styles.container}>
        <View>
          <TextInput
            style={{ height: 40 }}
            value={this.state.todoText}
            placeholder="Type what you must ToDO!"
            onChangeText={text => {
              this.setState({ todoText: text });
            }}
            onSubmitEditing={e => this.handlerAddNewList(e)}
          />
          <FlatList
            data={this.props.arrayList.filter(item => item.completed === false)}
            renderItem={({ item }) => (
              <View style={styles.listTodo}>
                <Text style={styles.item}>{item.text}</Text>
                <Button
                  title="D"
                  onPress={() => this.handlerDoneTask(item.id)}
                />
                <Button
                  title="X"
                  onPress={() => this.handlerDeleteTask(item.id)}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  h1: {
    fontSize: 30
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  listTodo: {
    flexDirection: "row",
    alignItems: "center"
  }
});

const mapStateToProps = state => ({
  arrayList: state.arrayList
});
const mapDispatchToProps = dispatch => ({
  addList(newlist) {
    dispatch(addList(newlist));
  },
  deleteTask(id) {
    dispatch(deleteTask(id));
  },
  doneTask(id) {
    dispatch(doneTask(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
