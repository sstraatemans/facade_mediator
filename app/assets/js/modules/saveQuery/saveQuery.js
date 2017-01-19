import {app} from "./../../app";

console.log('module', app);

export const saveQuery = app.core.define('saveQuery', function(f){
    console.log('save');
    return {

    };
});
