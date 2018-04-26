import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';

export default class FlatList1 extends React.Component {
  render() {


    var flatList=[

      {
        key:'fqerfg25',
        name:'ayesha',
        description:'get thehomwork done'
      },
      {
        key:'fqerde-403k3',
        name:'Assignment',
        description:'get thehomwork done'
      },
      {
        key:'fqefqrft66',
        name:'Get milk',
        description:'get thehomwork done'
      },
      {
        key:'4r599',
        name:'study',
        description:'get thehomwork done'
      },
      {
        key:'3145677',
        name:'blah blah',
        description:'get thehomwork done'
      },







    ];
    return (
      <View style={styles.container}>
      
        
       
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
});
