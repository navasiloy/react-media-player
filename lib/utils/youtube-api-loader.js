"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// import loadAPI from './load-api'

exports.default = {
  _queue: [],
  _isLoaded: false,

  load: function load(component) {
    // if the API is loaded just create the player
    if (this._isLoaded) {
      component._createPlayer();
    } else {
      this._queue.push(component);

      // load the Youtube API if this was the first component added
      if (this._queue.length === 1) {
        // this._loadAPI()
      }
    }
  }

};