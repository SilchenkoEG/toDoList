import { View, Text, StyleSheet, TextInput,FlatList,Button } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";

export class Completed extends Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.arrayList.filter(item => item.completed === true)}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.listTodo}>
              <Text style={styles.item}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  h1 : {
    fontSize: 30
  },
  item : {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
const mapStateToProps = state => ({
    arrayList: state.arrayList
  });


export default connect(mapStateToProps)(Completed);
