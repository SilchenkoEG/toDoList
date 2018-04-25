import React, { Component } from "react";
import { View, Text, StyleSheet, Buttom } from "react-native";

export default class TabIcon extends Component {
    render() {
     const styles = {
        viewStyle: {
            backgroundColor: 'yellow'
        }
      }
      return (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>hi</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    viewStyle : {
        backgroundColor: 'yellow',
        
    },
    textStyle : {
        fontSize: 20,
    fontWeight: 'bold',
    height : 50,
        marginTop : 20
    }
})