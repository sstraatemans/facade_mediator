import {app} from "./../../app";

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
