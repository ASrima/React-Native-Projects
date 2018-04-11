import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ListView, StyleSheet, TextInput, ScrollView, TouchableOpacity, CheckBox,Picker,} from 'react-native';

export default class Note extends React.Component  {
    constructor(){
        super();
        this.state ={
            check: false,
            priority: 3,
            Pickervalue:'',
        }}
        CheckBoxTest(){
            this.setState({
                check: !this.state.check 
                //write a method to alert when box is uncheck
            })
            alert("You are about to check the task as done!")
        
    }


    changePriority(){
        this.setState({
            priority: this.state.priority + 1
        })
    }
    
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
       <CheckBox style={styles.check} value={this.state.check} onChange={()=> this.CheckBoxTest()} />
      <Text style={styles.noteText}> {this.props.val.date} </Text>
      <Text style={styles.noteText}>{this.props.val.note}</Text>
      <Text style={styles.noteText}>{this.props.val.desc}</Text>
      <TouchableHighlight onPress={() => this.changePriority()}>
          <Text style={styles.noteText}>Priority {this.state.priority}</Text>
     </TouchableHighlight>
     <View style={styles.picker}>
     <Picker 
     style={{width:'80%'}}

     selectedValue ={this.state.Pickervalue}
     onValueChange={(itemValue, itemIndex) => this.setState({Pickervalue:itemValue})}

     >
     <Picker.Item label="Add Tags"  value=""/>
     <Picker.Item label="Buy Milk" value="Buy Milk"/>
     <Picker.Item label="Finish Assignment" value="Finish Assignment"/>
     <Picker.Item label="Learn coding" value="Learn coding" />
     <Picker.Item label="Get medicine" value="Get medicine"/>
     <Picker.Item label="Get help" value="Get help"/>

     </Picker>

</View>
      <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
     
<Text style={styles.noteDeleteText}>Delete</Text>
</TouchableOpacity>

      
      </View>
    );
  }
}
const styles = StyleSheet.create({
    note:{
        position:'relative',
        padding:2,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:'#ededed',
    },

    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
        backgroundColor:'#2980b9',
        padding:10,
        top:20,
        //bottom: 10,
        //right: 10,
    },
    noteDeleteText:{
        color:'white',
    },
 
    check:{
     borderBottomColor: 10,
     borderBottomColor:'red',



     // resize the checkbox
    },
    picker:{
        backgroundColor:'green',
        //padding:10,
        
    }
  

});
