import {app} from "./../../app";
import "./listQueries.scss";

export const listQueries = function(f) {
    let init = () => {
      console.log('init start');
    };

    let destroy = () => {
      console.log('destroy');
    };

    return {
      init,
      destroy
    };
};

app.core.define('listQueries', listQueries);
