/* // EditTask.js
import React from 'react'; // -*- js-jsx -*-
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class EditTask extends React.Component {
  static navigationOptions = {
    title: 'Edit Task',
  };
  constructor(props) {
    super(props)
    const task = this.props.navigation.state.params.task
    // Execute some code on leaving this page
    this.state = {description: task.getDescription(),
                  deadline: task.getDeadline()}
    this.props.navigation.addListener(
      'didBlur',
      arg => {
        task.setDescription(this.state.description)
        task.setDeadline(this.state.deadline)
        this.props.navigation.state.params.onChange(task)
      }
    )
  }
  setDescription(text) {
    this.setState(prev => {
      return {...prev, description:text}
    })
  }

  render() {
    const task = this.props.navigation.state.params.task
    return (
      <View>
        <TextInput
          maxLength={80}
          placeholder="Description"
          value={this.state.description}
          style={{width:"100%", height:40, fontSize:24}}
          onChangeText={text => this.setDescription(text)}
          />
<DatePicker
        style={{width: 200}}
        date={this.state.deadline}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({deadline: date})}}
  />

      </View>
    )
  }
}
*/