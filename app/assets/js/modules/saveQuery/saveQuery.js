import {app} from "./../../app";

console.log('module', app);

export const saveQuery = app.core.define('saveQuery', function(f){
    let init = () => {
      console.log('init');
    };

    let destroy = () => {
      console.log('destroy');
    };

    return {
      init,
      destroy
    };
});
