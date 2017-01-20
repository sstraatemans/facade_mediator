import {app} from "./../../app";
import "./listQueries.scss";

export const listQueries = app.core.define('listQueries', function(f){
    let init = () => {
      console.log('f',f);
      console.log('app',app);
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
