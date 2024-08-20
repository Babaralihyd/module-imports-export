// ============================== Single Named import ==============================

import { singleWelcome } from "./file1";
import {  user_name } from "./file1";
import { myfriends } from "./file 2"; 

console.log(user_name)
myfriends()
console.log(singleWelcome);




//=============================== multiple Named import============================== 



import { multiName,sum,friends } from "./file1";

console.log(sum(24,5))
console.log(friends);
console.log(multiName);




//================================ Default import export ============================= 

// when importing a default Export you don't need
// to use curly braces


import  xyz  from "./default.js"    


console.log(`subtract  Result : ${xyz(450 , 22)}`);


import babar from "./object.js";     //  myObject rem name 


console.log(babar);



import myValue from "./file 2";

console.log(` result of  my vlaue :  ${myValue}`);






// ============================Namespace import=============================


// A namespace import is a type of import in
// typscript that allows you to import all exports of
// a module in a single namespace . 

import * as  namespace from './nameSpace.js'
import myObject from "./object.js";
 
namespace.welcome

namespace.admission

namespace.classes

namespace.fess

  

console.log(myObject.name);




