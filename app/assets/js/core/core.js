import {app} from "./../app";

app.core = (function(){
  const data = {};
  /**
   * define a module
   * @param  {string} id modulename
   * @param {function} constructor the module constructor
   */
  let define = (id, construct) => {
    if(app.utils.typeEqual(id, 'string') && app.utils.typeEqual(constructor, 'function')){
        //test if you can init the module
        let temp = construct(app.f.define(app.f, id));
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
  let start = (id) => {
    var module = data[id];
    module.instance = module.define(app.f.define(app.core,id));
    module.instance.init();


    if(module.instance.getElements && app.utils.typeEqual(module.instance.getElements, 'function')){
      if(module.instance.getElements().length>0){
        for (var elm of module.instance.getElements()) {
          module.instance.render(elm);
        }
      }
    }

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
