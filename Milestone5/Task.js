/* // Task.js
import hdate from 'human-date';

export default class Task {
  constructor(description) {
    this.key = Math.random().toString().substring(2)
    this._description = description
    this._priority = 3   // default
    this._done = null    // not done
    this._notes = []     // no tags yet
    this._deadline = null  // no deadline yet
  }

  setDescription(text) {
    this._description = text
    return this
  }

  setDeadline(date) {
    this._deadline = date
  }
  setNotes(notes){
    this._notes = notes
    return this
  }

  setDeadlineRandomly() { // for testing purposes
    const today = new Date()
    const yy = today.getFullYear()
    const mm = today.getMonth()
    const d = Math.floor(Math.random()*28+1)
    this._deadline = new Date(yy,mm,d)
    return this
  }

  getPriority() {
    return this._priority
  }

  setPriority(p) {
    if(p >= 1 && p <= 5) {
      this._priority = p
    }
    else {
      console.log("Error: invalid priority", p)
    }
    return this  // Allow chaining
  }
  

  adjustPriority(delta) {
    this._priority += delta
    if(this._priority >= 5)
      this._priority = 5
    if(this._priority < 1)
      this._priority = 1
    return this
  }

  isDone() {
    return this._done != null
  }

  markDone(done) {
    if(done) this._done = new Date()
    else this._done = null
    return this
  }

  toggleDone() {
    this.markDone(!this.isDone())
    return this
  }

  addTag(str) {
    this._Notes.push(str)
    return this
  }



  relativeDeadlineString() {
    if(this._deadline != null) {
      return ' due ' + hdate.relativeTime(this._deadline)
    }
    else {
      return '';
    }
  }

  getDeadline() {
    return this._deadline
  }

  getDescription() {
    return this._description
  }
getNotes(){
  return this._notes
}
  getPriorityColor() {
    return ['#4ba3da','#abdda4','#ffffbf','#fdae61','#f7797c'][this._priority-1]
  }

  static compareByDescription(a,b) {
    if(a._description < b._description) {
      return -1;
    } else if(b._description < a._description) {
      return 1;
    } else {
      return 0;
    }
  }

  static compareByPriority(a,b) {
    if(a._priority < b._priority) {
      return 1;
    } else if(b._priority < a._priority) {
      return -1;
    } else {
      return 0;
    }
  }
}
*/