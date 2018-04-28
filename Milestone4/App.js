import React from 'react';
import { StyleSheet, Text, View,Button,CheckBox, } from 'react-native';


const TaskList=[{
  title:'React Native',
  key:'1234',
  description:'Finish React Native Projects'

},

{
  title:'Scholarships',
  key:'4678',
  description:'Apply for Scholarships'

},
{
 title:'Job Search',
 key:'85060',
  description:'Apply for jobs'
},
{
  title:'Meetting',
  key:'467435',
  description:'Meet Professor League'

},
{
  title:'Graduation',
  key:'4673q458',
  description:'Apply for Graduation'

},
{
  title:'Email',
  key:'467348',
  description:'Email Google for IO Conference'

},
{
  title:'Interview',
  key:'46734rr8',
  description:'Practise Interview Qustions'

},
{
 title:'Solve XSS',
 key:'22343546',
 description:'Prevented XSS attack'
},
{
  title:'CS150',
  key:'2345356',
  description:'Finish CS150 Project'
}
];







export default class App extends React.Component {

  state ={
    TaskListIndex:0,
    checked: false
  }

  //Write a function to move to the next task using the Button
  //Show at least 3 tasks in one page
   
  nextTask = () =>{

    const {TaskListIndex} = this.state;

    if (TaskListIndex <TaskList.length -1) {
      this.setState({
        TaskListIndex: TaskListIndex +1
      
      });


    } else{
      this.setState({
        TaskListIndex: 0
      });
    
    } 

  // ToDo Fix CheckBox
    //CheckBox does not show the alert message
   /* checkBox=()=> {     

    const {checked}  =this.value.state;
    if(checked== this.state.checked){
      this.setState({
      checked: alert("You checked")
      });
    }else {
      this.setState({
        checked: alert("You unchecked")
      });
    }}
    */
  }
  




  
  render() {

  const TaskLists = TaskList[this.state.TaskListIndex];

    return (
      <View style={styles.container}>
      <CheckBox value={this.state.checked} onValueChange={this.checkBox}/>
       <Text style={styles.title}> {TaskLists.title} </Text>
       <Text style={styles.desc}>{TaskLists.description}</Text>

       <View style={styles.button}>

         <Button    
         
         title={"Next Task"}
         onPress ={this.nextTask }
         
         
         />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
  position:'absolute',
  bottom:30,
  //fontFamily:'sans-serif-condensed',


  },
  title:{
    fontWeight:"800",
    fontSize:24,
    fontFamily:'sans-serif-condensed',

  },

  desc:{
  fontSize:22,
  fontFamily:'sans-serif-condensed',

  },
});
