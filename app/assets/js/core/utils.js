import {app} from "./../app";

app.utils = (function() {

  /**
   * check if the objecgt is a certain type
   * @param  {all} input
   * @param  {string} desiredType searched type
   * @return {boolean}
   */
  let typeEqual = (input, desiredType) => {
	   return type(input).toLowerCase() === desiredType;
	};

  /**
   * find the type of the given attribute
   * @param  {all} input
   * @return {string}    the type of the attribute
   */
  let type = (input) => Object.prototype.toString.call(input).match(/^\[object\s(.*)\]$/)[1];

  return {
    type,
    typeEqual
  };
}());
