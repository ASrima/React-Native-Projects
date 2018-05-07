import React from 'react'; // -*- js-jsx -*-
import { StyleSheet,Button, FlatList,Image, Text, View,ScrollView,TouchableOpacity,TextInput, } from 'react-native';
import TaskItem from './TaskItem';


import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component{

 
  //create a static variable
  static navigationOptions={
    title:'Home',  // this is the title that will show up in the navigation bar
  };
 
}
class ProfileScreen extends React.Component{
  //create a static variable
  static navigationOptions={
    title:'Profile',  // this is the title that will show up in the navigation bar
  };
 render(){
   const {navigate } = this.props.navigation; //this is sent from  <NavigationApp /> component
   return(
     
   <View style={styles.home}>

   <Button   style={{padding:20, borderWidth:2, borderColor:'green', flexDirection:'row'}}
   onPress={() =>  navigate ('Home')}
   
   title=" Navigate to Home"

   /> 

       <View style={styles.textinput}>
      
   <TextInput
        style={{fontSize:20, paddingBottom:20}}
        
      />
   
     </View>
     <ScrollView>
       <Text style={{fontWeight:'bold',color:'green',textAlign:'center',fontSize:20, marginBottom:10, marginTop:10}}> 
       Welcome to Image Gallery </Text>
       <View style={{flexWrap:'wrap', flex:1, flexDirection:'row'}}>
     <Image
              style={{width: 90, height: 90, justifyContent:'center',  paddingTop:20, marginTop:20, marginLeft:20,flexDirection:'row',}}
              source={{uri: 'https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg'}}
              />
     
 
     <Image
              style={{width: 90, height: 90, justifyContent:'center',  paddingTop:20, marginTop:20, marginLeft:20, flexDirection:'row'}}
              source={{uri: 'https://wallpapers.pub/web/wallpapers/birds-water-spray-wallpaper/3840x2160.jpg'}}

              />
      <Image
              style={{width: 90, height: 90, justifyContent:'center',  paddingTop:20, marginTop:20, marginLeft:20, flexDirection:'row'}}
              source={{uri: 'http://www.theimaginativeconservative.org/wp-content/uploads/2016/02/red-roses.jpg'}}

              />
             <Image
              style={{width: 90, height: 90, justifyContent:'center',  paddingTop:20, marginTop:20, marginLeft:20, flexDirection:'column-reverse'}}
              source={{uri: 'https://wallpaperbrowse.com/media/images/th.jpg'}}

              />
             <Image
              style={{width: 90, height: 90, justifyContent:'center',  paddingTop:20, marginTop:20, marginLeft:20, flexDirection:'column', justifyContent:'space-between'}}
              source={{uri: 'https://wallpaperbrowse.com/media/images/1159701.jpg'}}

              />
              <Image
              style={{width: 90, height: 90, justifyContent:'center',  paddingTop:20, marginTop:20, marginLeft:20, flexDirection:'column', justifyContent:'space-between'}}
              source={{uri: 'https://wallpaperbrowse.com/media/images/image-1635747_960_720.jpg'}}

              />
             
             
              </View>  
              </ScrollView>           
  </View>
  

   );

 
  }
}


function randomDay(y, m) {
  const d = Math.floor(Math.random()*28+1)
  return new Date(y,m,d)
}

 class TaskList extends React.Component { //export default
  static navigationOptions = {
    title: 'My Task List',
    
  };
  
  constructor(props) {
    super(props)
    const today = new Date()
    const yy = today.getFullYear()
    const mm = today.getMonth()

    this.state = {
      taskList: [
        {title: "React Native",
         key: "3298745",
         priority:2,
         notes: ["complete project"],
         deadline: randomDay(yy,mm)},
        {title: "Add ScrollView",
         key: "398657",
         priority:3,
         done: null,
         notes: ["Helps to Scroll"],
         deadline: randomDay(yy,mm)},
        {title: "Do assignment",
         key: "968744",
         priority:5,
         notes: ["School work"],
         deadline: randomDay(yy,mm)},
        {title: "Summer Jobs",
         key: "38576387",
         priority: 1,
         notes: ["Get ready"],
         deadline: randomDay(yy,mm)},
        {title: "Interviews",
         key: "875684762",
         priority:4,
         notes: ["Practise coding"],
         deadline: randomDay(yy,mm)},
         {title: "Finals",
         key: "8756847689",
         priority:2,
         notes: ["Study hard"],
         deadline: randomDay(yy,mm)},

      ]}

  }

  adjustPriority(newPriority, itemId) {
    this.setState(prev => {
      var newList = prev.taskList.map(task => {
        if(task.key == itemId) {
          return {...task, priority: newPriority}
        } else {
          return task
        }
      })
      return {...prev, taskList: newList}
    })
  }

 
  
    renderItem(item) {
      return (
        <TaskItem
          key={item.item.key}
          id={item.item.key}
          title={item.item.title}
          done={item.item.done}
          priority={item.item.priority}
          deadline={item.item.deadline}
          notes={item.item.notes}
          onAdjustPriority={
          (newPriority, itemId) => this.adjustPriority(newPriority, itemId)}
          />
      )
    }
  
 //sorts item by Title 
  sortItems() {
    this.setState(prev => {
      prev.taskList.sort(function(a,b) {
      if(a.title < b.title) {
        return -1;
      } else if(b.title < a.title) {
        return 1;
      } else {
        return 0;
      }
      })
      return prev
    })
  }
 //sorts items by priority 
 sortByPriority() {
  this.setState(prev => {
    prev.taskList.sort(function(a,b) {
    if(a.priority < b.priority) {
      return 1;
    } else if(b.priority < a.priority) {
      return -1;
    } else {
      return 0;
    }
    })
    return prev
  })
}

  //sorts Item by Dates
  sortByDate(){
      this.setState(prev => {

        prev.taskList.sort(function(a,b){
            if(a.deadline > b.deadline){
                return 1;
            } else if(b.deadline>a.deadline){
                return -1;
            }else{
                return 0;
            }

        })
        return prev
      })
  }

  render() {  
    
    const {navigate } = this.props.navigation;
    //sorting by Description, Priority and Date
    return (
      <View style={{paddingTop:15,}}>
      <ScrollView>
      <View style={styles.title}>
              <TouchableOpacity
                onPress={() => this.sortItems()}
              >
              <Image
              style={{width: 22, height: 22, justifyContent:'center', alignSelf:'center'}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />

            <Text style={styles.priority}>SORT BY TITLE</Text>
            </TouchableOpacity>


       </View>
              <View style={styles.title}>
                        <TouchableOpacity
                          onPress={() => this.sortByPriority()}
                        
                          >
                          <Image
                          style={{width: 22, height: 22, justifyContent:'center', alignSelf:'center'}}
                          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                          />

                          
                          <Text style={styles.priority}> SORT BY PRIORITY</Text>
                          </TouchableOpacity>
              </View>
                    <View style={styles.title}>
                        <TouchableOpacity
                            onPress={( ) =>this.sortByDate()}

                            
                          >
                            <Image
                              style={{width: 22, height: 20, justifyContent:'center', alignSelf:'center'}}
                              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                              />

                            <Text style={styles.priority}> SORT BY DATE</Text>

                            </TouchableOpacity>
                      </View>

  
  <Button style={styles.home}
    onPress={() =>  navigate ('Profile','item')}
    title="Edit"
    /> 

        <FlatList
          style={{}}
          data={this.state.taskList}
          renderItem={item => this.renderItem(item)}
          />
          
        </ScrollView>  
      </View>
    )
  }
}

export default NavigationApp = StackNavigator({
  Home:{screen: TaskList},
  Profile:{screen:ProfileScreen },
});




const styles = StyleSheet.create({
  priority: {
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center',
    fontSize:16,
    marginBottom:10
   // borderColor:"red"
  },
  title:{
     padding:2,
     
     backgroundColor:'steelblue',
     
     borderColor:'#d9dcdd',
     
     borderWidth:2, 
    // alignSelf:'center'
  },
  textinput:{
    width:280,
    height: 60, 
    borderColor: 'red', 
    borderWidth: 2, 
    backgroundColor:'white', 
    marginLeft:20, 
    marginRight:20,
     marginLeft:20, 
     paddingLeft:20, 
     paddingTop:20, 
  },

})
