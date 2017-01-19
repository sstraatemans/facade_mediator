import { app } from "./../app";

app.f = (function(){

  let define = ( core, module ) => {
    var core = core;

    return {
      core
    };
  };

  return {
    define
  };
}());
