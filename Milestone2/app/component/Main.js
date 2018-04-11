import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ListView, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Note from './Note';
export default class Main extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            noteArrey: [],
            noteText:'',
        }
    }
  render() {
      let notes = this.state.noteArrey.map((val, key)=> {
          return <Note key ={key} keyval = {key} val={val}
                 deleteMethod = { ()=> this.deleteNote(key)} />

        });
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> Noter </Text>
    
        </View>
        <ScrollView style={styles.scrollContainer}>
        {notes}
        </ScrollView>
        <View style={styles.footer}>
        <TextInput
        style ={styles.textInput}
        onChangeText = {(noteText) => this.setState({noteText})}
        value={this.state.noteText}
        placeholder='NOTES'
        placeholderTextColor='blue'
        underlineColorAndroid='transparent'>
        </TextInput>
        </View>
        <TouchableOpacity  onPress={ this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
      </View>
    );
  }
  addNote(){
     if (this.state.noteText){
         var d = new Date();
         this.state.noteArrey.push({
             'date': d.getFullYear()+ "/" +(d.getMonth() + 1) + "/" + d.getDate(),
             'note': this.state.noteText

         });
         this.setState({noteArrey: this.state.noteArrey})
        this.setState({noteText: ''});
     }
  }
  deleteNote(key){
      this.state.noteArrey.splice(key, 1);
      this.setState({noteArrey: this.state.noteArrey})
  }
}
const styles = StyleSheet.create({
  container: {
      flex:1,
    backgroundColor: 'grey',
    //textAlign:'center',
    
  },
  header:{
      backgroundColor:'#E91E63',
      alignItems:'center',
      justifyContent:'center',
      borderBottomWidth:10,
      borderBottomColor:'#ddd',
  },
  headerText:{
      color: 'black',
      fontSize: 20,
      padding:26,
  },
  scrollContainer:{
      flex: 1,
      marginBottom:100,
  },
  footer:{
      position:'absolute',
      bottom: 0,
      left: 0,
      right:0,
      zIndex:10,
  },
  textInput:{
      alignSelf: 'stretch',
      color:'green',
      padding:20,
      backgroundColor:'#ededed',
  },
  addButton:{
      position:'absolute',
      zIndex:11,
      right:20,
      bottom:90,
      backgroundColor:'#E91E63',
      width:90,
      height: 90,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation: 8,
  },
  addButtonText:{
      color:'#fff',
      fontSize:24,
  },

});
