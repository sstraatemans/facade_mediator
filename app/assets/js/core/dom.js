import $ from "jquery";
import {app} from "./../app";

app.core.dom = (function() {
  let _elements = [];
  let that = that;

  return {


            query: function(selector, context){

                var ret = {}, that = this, jqEls, i = 0;

                if (context && context.find) {
                    jqEls = context.find(selector);
                } else {

                    jqEls = app.core.dom.$(selector);
                }

                ret = jqEls.get();
                ret.length = jqEls.length;
                ret.query = function (sel) {
                    return that.query(sel, jqEls);
                };

                this._elements = ret;
                return this;

            },

            bind: function(el, evt, fn){
                if(el && evt){
                    if(app.utils.typeEqual(evt, 'function')){
                        fn = evt;
                    }

                    app.core.dom.$(el).bind(evt, fn);
                }else{
                    //console.log('wrong args');
                }
            },

            unbind:function(el, evt, fn){

                if(el && evt){
                    if(app.utils.typeEqual(evt, 'function')){
                        fn = evt;
                    }
                    app.core.dom.$(el).unbind(evt, fn);
                }else{
                }
            },

            attr:function(el, attribs){
                app.core.dom.$(el).attr(attribs);
            },

            getAttribute:function(el, attribs){

                var q = null;

                attribs = attribs || el;

                //chaining
                if(this._elements.length){
                    el  = this._elements;
                }

                //jQuery object
                if(el instanceof jQuery){
                    q =  el.attr(attribs);
                }else{
                    //string
                    if(app.utils.typeEqual(el, 'string')){
                        q =  app.core.dom.$(el).attr(attribs);
                    }
                    //array
                    else if(app.utils.typeEqual(el, 'array')){
                        q =  app.core.dom.$(el).attr(attribs);
                    }else{
                         q =  el;
                    }

                }

                this._elements = q;

                return q;
            },

            setAttribute:function(el, attrib, value){
                var q = null;
                if(el instanceof jQuery){
                    q =  e.attr(attribs, value);
                }else{
                    //string
                    if(app.utils.typeEqual(el, 'string')){
                        q =  app.core.dom.$(el).attr(attribs,value);
                    }
                    //array
                    else if(app.utils.typeEqual(el, 'array')){
                        q = app.core.dom.$(el).attr(attribs, value);
                    }else{
                        q = el;
                    }

                }

                return q;
            },

            css: function(el, props){

                var q = null;
                props = props || el;

                //chaining
                if(this._elements != undefined){
                    el  = this._elements;
                }

                // jQuery object
                if(el instanceof jQuery){
                    q =  el.css(props);
                }else{
                    // string selector
                    if(app.utils.typeEqual(el, 'string')){
                        q =  app.core.dom.$(el).css(props);
                    }
                    // array
                    else if(app.utils.typeEqual(el, 'array')){
                        q =  app.core.dom.$(el).css(props);
                    }
                    else{
                        q =  el;
                    }
                }

                this._elements = q;
                return this;

            },


            ready:function(fn){
                if(app.utils.typeEqual(fn, 'function')){
                    return app.core.dom.$(document).ready(fn);
                }else{
                    //
                }

            },

            animate:function(el, props, duration){
               jQuery(el).animate(props, (props.duration)? props.duration : duration);
            },


            ajax:function(options){

                var xhrArgs = {};
                xhrArgs.type = options.method;
                xhrArgs.url = options.url;
                xhrArgs.data =  options.data;
                xhrArgs.success = options.success;
                xhrArgs.dataType = options.type;
                xhrArgs.cache = options.cache;
                xhrArgs.error = options.error;

                return jQuery.ajax(xhrArgs);


            },

            create:function(tag, attrs, refNode, pos){

                var q;

                if(tag){
                    q = jQuery(tag);
                }

                if(attrs){
                    q.attr(attrs);
                }

                if(refNode){
                    q.appendTo(refNode);
                }
                return q;
            },

            $:function(args){
                return $(args);
            },

            //this is deprecated
            createElement: function(el){
                return document.createElement(el);
            },

            isArray:function(arr){
                return jQuery.isArray(arr);
            },
            isObject:function(obj){
                return jQuery.isPlainObject(obj);
            }

  };

}());
