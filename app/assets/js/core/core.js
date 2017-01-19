import {app} from "./../app";
import {dom as _dom} from "./dom";
import {utils as _utils} from "./utils";

app.core = (function(){
  const dom = _dom;
  const utils = _utils;

  const data = {};
  /**
   * define a module
   * @param  {string} id modulename
   * @param {function} constructor the module constructor
   */
  let define = (id, constuctor) => {
    if(utils.typeEqual(id, 'string') && utils.typeEqual(constructor, 'function')){
      data[id] = constructor;
    }else{
      throwError(1, 'Module' + id + 'registration failed. One or more args are of an incorrect type');
    }
    console.log('data',data);
  };

  /**
   * log function for errors
   */
  let throwError = (errType, msg) => {
    console.log(errType, msg);
  };

  return {
    dom,
    define,
    throwError
  };
}());
