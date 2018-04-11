// TaskItem.js -*- js-jsx -*-
import React from 'react';
import { Text, StyleSheet,View,} from 'react-native';
import hdate from 'human-date';

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {done: props.done, priority: props.priority};
  }

  render() {
    var due = '';
    if(this.props.deadline != null) {
      due = ' due ' + hdate.relativeTime(this.props.deadline)
    }
    return (
        <View style={styles.ok}>
        <Text >{this.state.priority}: {this.props.description}
           {due}
        </Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
   ok:{
       //flex:0.1,
      backgroundColor:'#66ffcc',
      padding: 15,
      //color:'red',
    
    },
  });
