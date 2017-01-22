import {app} from "./../../app";

export const saveQuery = app.core.define('saveQuery', function(f){
    let elementName = "ci-savequery";
    let elements;

    let init = () => {
      elements = f.dom.$(elementName);
      console.log('init');

    };

    let destroy = () => {
      console.log('destroy');
    };

    let getElements = () => {
      return elements;
    };



    let template = () => {
      return `
        <a href="#" data-button>save</a>
      `;
    };

    let render = (elm) => {
      elm.innerHTML = template();

      //FIXME: only search for elements in the module
      let button = f.dom.$('[data-button]', elm);
      f.dom.bind(button, 'click', function(){
        f.events.publish('test_event');
      });

    };

    return {
      init,
      destroy,
      render,
      getElements
    };
});
