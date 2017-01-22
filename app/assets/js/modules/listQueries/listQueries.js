import {app} from "./../../app";
import "./listQueries.scss";

export const listQueries = function(f) {
    let init = () => {
      console.log('init start');
      f.events.subscribe('test_event', (args) => {
        console.log(`I heard.`);
      });
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
