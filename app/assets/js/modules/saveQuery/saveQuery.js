import {app} from "./../../app";

export const saveQuery = app.core.define('saveQuery', function(f){
    let init = () => {
      console.log('init');
      f.events.publish('test_event');
    };

    let destroy = () => {
      console.log('destroy');
    };

    return {
      init,
      destroy
    };
});
