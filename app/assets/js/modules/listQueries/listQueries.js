import {app} from "./../../app";
import "./listQueries.scss";

export const listQueries = function(f) {
    let elementName = "ci-listquery";
    let elements;

    let init = () => {

      elements = f.dom.$(elementName);
      f.events.subscribe('test_event', (args) => {
        console.log(`I heard.`);
      });
    };

    let destroy = () => {
      console.log('destroy');
    };

    let getElements = () => {
      return elements;
    };

    let template = () => {
      return `
        <table>
          <thead>
            <tr>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      `;
    };

    let render = (elm) => {
      elm.innerHTML = template();
    };

    return {
      init,
      destroy,
      render,
      getElements
    };
};

app.core.define('listQueries', listQueries);
