//Task.js

import hdate from 'human-date';

export default class Task{

constructor (description){
    this._description =description

    this._done = nullthis._tags=[] //empty array for the tags as initial valure is 0

    this._deadline=null //no deadline yest
}


setDescription(text){
    this._description =text

    return this
}

getDescription() {
    return this._description
  }


}


