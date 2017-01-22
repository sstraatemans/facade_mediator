import { app } from "./../app";

app.f = (function(){
  let define = ( core, module ) => {
    let {events={}} = core;
    return {
      events
    };
  };

  return {
    define
  };
}());
