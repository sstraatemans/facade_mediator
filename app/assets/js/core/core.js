import {app} from "./../app";

app.core = (function(){
  const data = {};
  console.log(app);
  /**
   * define a module
   * @param  {string} id modulename
   * @param {function} constructor the module constructor
   */
  let define = (id, construct) => {
    if(app.utils.typeEqual(id, 'string') && app.utils.typeEqual(constructor, 'function')){
        //test if you can init the module
        let temp = construct(app.f.define(this, id));
        console.log('temp',temp);
        if(temp.init && app.utils.typeEqual(temp.init, 'function')
          && temp.destroy && app.utils.typeEqual(temp.destroy, 'function')){
            temp = null;
            data[id] = { define: construct, instance: null};
        }else{
            app.core.throwError(1, 'Module ' + id + ' cannot be initialized');
        }
    }else{
        app.core.throwError(1, 'Module ' + id + 'args are incorrect');
    }
  };

  /**
   * start 1 module by id
   * @param  {string} id id of the module
   */
  let start = function(id) {
    var module = data[id];
    module.instance = module.define(app.f.define(this,id));
    module.instance.init();
  };

  /**
   * start all registered modules
   */
  let startAll = () => {
    let id;
    for(id in data){
      if(data.hasOwnProperty(id)){
        start(id);
      }
    }
  };

  /**
   * log function for errors
   */
  let throwError = (errType, msg) => {
    console.log(errType, msg);
  };


  return {
    define,
    throwError,
    startAll,
    start
  };
}());
