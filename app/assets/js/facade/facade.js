import { app } from "./../app";

app.f = (function(){
  let define = ( core, module ) => {
    let {events={},
        dom={}} = core;
    return {
      events,
      dom
    };
  };

  return {
    define
  };
}());
