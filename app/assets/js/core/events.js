import {app} from "./../app";
import {EventEmitter2} from "eventemitter2";

app.core.events = (function(emitter) {
  let server = new emitter({

  });

  let subscribe = (event, listener) => {
    server.on(event, listener);
  };

  let publish = (event, ...args) => {
    server.emit(event, {args});
  };

  return {
    subscribe,
    publish
  };
}(EventEmitter2));
