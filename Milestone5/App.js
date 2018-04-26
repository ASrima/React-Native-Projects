import React from 'react';
import { StyleSheet, Text, View, FlatList, Button,Alert, TouchableHighlight,TextInput ,CheckBox,ScrollView,} from 'react-native';
import Expo from 'expo';
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
   <View style={styles.navi1}>

   <Text style={styles.home}
   onPress={() =>  navigate ('Home')}> Navigate to Home Now :)

   </Text>
    
     </View>

   );
 
  }
}

class app extends React.Component {
TaskList=[{
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
];


  


  render() {
    const {navigate } = this.props.navigation; //this is sent from  <NavigationApp /> component

//    return <NavigationApp />;
    return (
     
      <View style={styles.container}>
     <Button style={styles.home}
    onPress={() =>  navigate ('Profile')}
    title="Edit"
    > 
   
   
</Button>


<View>
<ScrollView>
  
       <FlatList
          data={this.TaskList} //displays the Tasks in the FlastList array
          renderItem={({item, index}) => 
         
          <View style={styles.box}>
          <View style={styles.color}>
             <CheckBox  />

           
          <View>
          <Text style={{flexDirection:'row-reverse',}}>{item.title}</Text>
          </View>
          <View>

<Text style={{fontWeight:"200", flexDirection:'column',}}>{item.description}</Text>
</View>
          </View>
          
          </View>
          

         
        }
        />
  
  </ScrollView> 
  </View>
        </View>
    );
  }
}
export default NavigationApp = StackNavigator({
  Home:{screen: app},
  Profile:{screen:ProfileScreen },
});


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection:'column',
    backgroundColor: 'grey', //this.index % 2 == 0?  'green':'grey',      //'#fff',  this.index works but not for both
    alignItems: 'center',
    //justifyContent: 'center',
    //padding:10,
    marginLeft:20,
    marginTop:10,
    marginBottom:10,
    borderWidth:2,
    borderColor:'pink',
  },
  profile:{
    fontWeight:"800",
    backgroundColor:'#f44283',

  },
  home:{
    //flex:3,
    //justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    fontSize:30,
   //flexDirection:'column',
   backgroundColor:'#f44283',
   fontWeight:"800",
   fontSize:20,
   padding:20,

  },
  color:{
    backgroundColor: this.index % 2 == 0 ?  'green':'red',  //want to have two different color for every other row
  },
  title:{
  fontWeight:"800",
  fontSize:20,
  padding:10,
  flexDirection:'row',

  },
  desc:{
 // fontWeight:"200",
  //fontSize:14,
  //flexDirection:'row',
  },
  box:{
    flexDirection:'row',

  },
  
  navi1:{
    backgroundColor:'#af0793',

  },
});





