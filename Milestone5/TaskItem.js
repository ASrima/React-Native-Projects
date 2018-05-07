// TaskItem.js -*- js-jsx -*-
import React from 'react';
import { Text, View, CheckBox,Alert, TouchableOpacity, StyleSheet,Picker,ScrollView, Button, } from 'react-native';
import hdate from 'human-date';
import TaskList from './TaskList';
import Icon from 'react-native-vector-icons/Feather';
import { StackNavigator } from 'react-navigation';




 export default class TaskItem extends React.Component { //export default
  constructor(props) {
    super(props);
   // this.state = {done: props.done, priority: props.priority};
    this.state ={
      PickerValue: '*****'.substring(5 - props.priority),
      priority: props.priority
    };

    // Make sure "this" is defined
    this.changePriority.bind(this)
  }

  changePriority(itemValue, itemIndex) {
    console.log("CHANGE PRIORITY", itemValue, itemIndex)
    this.setState(prev => {
      this.props.onAdjustPriority(itemValue.length, this.props.id)
      return {...prev, PickerValue: itemValue, priority: itemValue.length}
    })
  }

  toggleDone() {
    this.setState(prev => {
      var d = prev.done == null? new Date() : null
      return {...prev, done: d}
    })
  }

  render() {
   
    var due = '';
    if(this.props.deadline != null) {
      due = ' due ' + hdate.relativeTime(this.props.deadline)
    }
    const isDone = this.state.done != null
    // These styles will be customized based on current state
    let descStyle = {fontSize:20, fontWeight: 'bold'}
    let dueStyle = {fontSize:18}
    let priStyle = {
      flexDirection: 'row',
    }
    if(isDone) {
      descStyle.textDecorationLine = 'line-through'
      descStyle.textDecorationStyle = 'solid'
      descStyle.color = 'red'
      Alert.alert("The task is marked as done")

    }
  
    const notes = this.props.notes? this.props.notes : []
    return (
        <ScrollView>
           
      <View style={styles.item}>
     
     
        <CheckBox style={styles.checkbox} value={isDone}
                  onValueChange={()=>this.toggleDone()}/>
        <View style={styles.info}>
          <Text style={descStyle}>{this.props.title}</Text>


          
          <View style={styles.middleRow}>
          <View style={styles.pickerView}>
            <Picker
            style={{width:'80%'}}


            selectedValue={this.state.PickerValue}
            onValueChange = {(v,i) => this.changePriority(v,i)}
           >
            <Picker.Item label="Choose Priority" value=" " />
            <Picker.Item label="*****" value="*****" />
            <Picker.Item label="****" value="****" />
            <Picker.Item label="***" value="***" />
            <Picker.Item label="**" value="**" />
            <Picker.Item label="*" value="*" />


            </Picker>

            
            <Text style={dueStyle}>{due}</Text>
          </View>
          <View style={styles.bottomRow}>
            <Text style={{color:"#f44265", paddingBottom:5}}>{notes}</Text>
              <Button style={styles.home}
      onPress={() =>  navigate ('Profile',<NavigationApp/>)}
      title="Edit"
      /> 
     
           
            </View>
          </View>
        </View>
        
      </View>
      </ScrollView>
     
      
    );
  }
}




const styles = StyleSheet.create({
  bottomRow: {
    borderWidth:2,
   // borderColor:"red"
  },
  info: {
    marginTop: 4,
  },
  item: {
    flexDirection: 'row',
  },

  checkbox: {
    marginLeft: 10,
    marginRight: 10,
  },
  middleRow: {
    flexDirection: 'row',
    borderWidth:2,
   // borderColor:"green",
  },
  pickerView: {
    borderWidth:2,
   // borderColor:"blue",
    width:"60%",
  }
})
