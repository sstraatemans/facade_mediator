import $ from "jquery";
import {app} from "./../app";

app.dom = (function() {
  let _elements = [];

  let query = (selector) => {
    let el = $(selector);
    _elements = el;
    return el;
  };

  let data = (el, attr) => {
    attr = attr || el;
    //chaining
    if(_elements.length){
      el = _elements;
    }

    return el.data(attr);
  };

  let $ = (args) => {
    return $(args);
  };

  return {
    data,
    query
  };
}());
