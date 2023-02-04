// Js Answer 1 pull

var array = ['a', 'b', 'c', 'a', 'b', 'c'];
var newArray=[];
function pull (array,b,c){
  for(let i=0 ; i<array.length; i++){
   if(array[i] == b||array[i] == c){
     continue;
   }
   else {
    newArray.push(array[i]);
   }
}
console.log (newArray);
}
pull(array,'a','c');


 
// Js Answer 2 chunk



function chunk(...values){
  let newArray = [...values];
  let numberOfSplite = newArray.pop();
  let all =[];
  for (let i=0 ; i<newArray.length;i+=numberOfSplite){
    let m = newArray.slice(i,numberOfSplite+i);
    all.push(m);


}


console.log(all);  


}


chunk("mmm","f","e","gtte","gfd",2)









// Slice Function 
Array = ["d",3,"t","f","s",4,6,"f","x","f","hy","y","e"];
function slice(startIndex,EndIndex) {
  newArray=[];
  for (let i = startIndex; i<EndIndex; i++){
     newArray.push(Array[i]);
  }
  console.log(newArray);
}
slice(0,5);








// Js Answer 3 Array/join 

let StringJoin="";
function join (array,separator){
 for(let i=0; i<array.length;i++){
  let newJoin = array[i]+separator;
  StringJoin+=newJoin;
 }
 console.log(StringJoin);
}
join(["f","fd","rw","sds"],"$");

















// Js Answer 4 collection/include

  function include (data,dataFromUser,index){
 if(Array.isArray(data)==true){
  for(var i = index; i<data.length; i++){
    if (data[i]==dataFromUser){
      return true;
    }
  }
  return false;
}
else if (typeof(data) == 'object') {
  var numbers = Object.values(data);
  for (var k = index ; k<numbers.length ; k++) {
    if(numbers[k]==dataFromUser){
           return true;
    }
  }
  return false;
}
else{


  for( let s = index ; s<data.length; s++){
   if(data.indexOf(dataFromUser) !== -1){
      return true;
   }
  }


return false;


}
}
console.log(include([1,2,3,4,5],3,0));












// Js Answer 5 collection/size
function size (data){
  if(Array.isArray(data)==true){
  for(var i = 0 ;i<data.length; i++){
     
  }
  return i;
}
else if (typeof data == 'object') {
   for(o in data){


   }
   let count = Object.keys(data).length
   return count ;


}
else {
  for( s=0; s<data.length; s++){


  }
  return s;
}
}
console.log(size ([123456,3,6,7]));




// Js Answer 6 Array/take
function take (data,countOfSlice){
  var OutPutData = data.slice(0,countOfSlice);
  return OutPutData;
}


console.log(take([1,2,3,4],3));

// Js Answer 7 collection/sample

function sample (data){
  var reandomElment= Math.floor(Math.random()*data.length);
  var Item = data[reandomElment];
  return Item;
}
console.log (sample([1,2,3,"r","q",0]));
// Js Answer 8  Array/intersection

function intersection (...Array){
  var firstArray = Array[0];
  var NewArray=[];
   for(var i = 0; i<firstArray.length;i++){
     for(var r = 1; r<Array.length; r++){
       for(let f=0;f<Array[r].length;f++){
     if(firstArray[i]==Array[r][f]){
       NewArray.push(Array[r][f]);
     }
   }
 }
}
let set = new Set(NewArray);
return set;
 
 }
 
 console.log(intersection([1,2,3,4,5,9],[1,2,3,7,8,9],[1,5]));

// Js Answer 9  Array/intersection


function union (...Array){
  var NewArray=[];
 for(var i=0; i<Array.length;i++){
  for(var r=0; r<Array[i].length;r++){
    NewArray.push(Array[i][r]);
  }
 }
 return NewArray;




}
 console.log(union([1,2,3,4,5,9],[1,2,3,7,8,9],[1,5]));











// Js Answer 10  Array/compat
function compact (data){
  var NewArray=[];
  for(var i = 0; i<data.length;i++){
     if(data[i]==false||data[i]=='false'||data[i]==0){
       continue
     }
     else{
      console.log(NewArray.push(data[i]));
     }
  }
}


compact([1,2,3,'',false,8,5])


// Js Answer 11  Array/  difference

function difference (...Array){
  var traget = Array.shift();
  var result=[];
  let test = true ;
  for(var i = 0; i<traget.length;i++){
     for(var array = 0; array<Array.length; array++){
      test = true ;
       for(let f=0;f<Array[array].length;f++){      
       if(traget[i] ==Array[array][f]){
        test = false
    }  
   }
   if(test){
    result.push(traget[i])
   }
 }
}
return result;
}
console.log(difference([1,2,3,4,45,9],[1,2,7,8,9,5]));







// Js Answer 12  Array/  drop

function drop (data,slices){
  return data.slice(slices);
}
console.log(drop([1,2,3,4,5,9],4));




// Js Answer 13  Array/  flatten

 var NewArray= [];
function flatten (data){
  for (var i = 0; i<data.length; i++){
    if(Array.isArray(data[i])!==true){
      NewArray.push(data[i])
    }
    for(let r = 0 ; r<data[i].length; r++){
      if(Array.isArray(data[i])==true){
        NewArray.push(data[i][r])
      }
    }
  }
  return NewArray;
}
console.log(flatten([1, [2, [3, [4]], 5]]));


// Js Answer 14  Array/ zip

let result1 = [];
let temp=[];
function zip (...array){
for(let i = 0 ; i<array[0].length ; i++){
  temp=[];
 for(let j = 0 ; j<array.length ; j++){
  temp.push(array[j][i]);
 }
 result1.push(temp);


}


return result;
}
console.log(zip(['a', 'b'], [1, 2], [true, false]));

// Js Answer 15  Array/ uniq

let NewArray=[];
function uniq (array) {
  for(let i = 0; i<array.length; i++){
    if(NewArray.indexOf(array[i]) === -1){
        NewArray.push(array[i]);
    }    
  }
  return NewArray;
}
console.log (uniq([2,1,2,3,3]));



// Js Answer 16 Array/unzip
let result=[];
let temp0=[];
let temp1=[];
let temp2=[];
function unZip(...array){
 for(let i = 0; i<array.length ; i++){
   for(let j = 0 ; j<array[i].length; j++){
    if(typeof array[i][j] == "number"){
      temp0.push(array[i][j]);
    }
    else if (typeof array[i][j] == "string"){
      temp1.push(array[i][j]);
    }
    else {
      temp2.push(array[i][j]);
    }
   }
   
  }
  result.push(temp0,temp1,temp2);
    return result;
}
console.log(unZip(['a', 1, true], ['b', 2, false]));





// Js Answer 17 Array/pullAt

var array = ['a', 'b', 'c', 'd','f'];
var removedValue = [];


function pullAt(array,arrayIndex){
  for(let i = 0; i<arrayIndex.length; i++){
    var removed =array.splice(arrayIndex[i],1);
    removedValue.push(removed);
  }
  return removedValue;
}
console.log(pullAt(array,[1,3]));

// Js Answer 18 Array/flattenDeep

let NewArray=[];
function flattenDeep (array){
  for(let i = 0; i<array.length; i++){
    if(Array.isArray(array[i])!== true){
     (NewArray.push(array[i]));
    }
    else{      
  flattenDeep(array[i])
    }
  }
    console.log(NewArray);
}


flattenDeep([1, [2, [3, [4]], 5]]);
















// Js Answer 19 Array/every


var users = [
  { 'user': 'fred', 'age': 40, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];
var keysWeNeed=[];
var numberOfTrues=[];
function every(data,condition){
  for(object of data ){
    for(i in object){
          if(Object.keys(condition)==i){
            keysWeNeed.push("VirtualValue");
          }
          if(keysWeNeed.length>=1){
            if(Object.values(condition)==object[i]){
              numberOfTrues.push("VirtualValue");
            }
          }
    }
  }
  if(keysWeNeed.length==numberOfTrues.length){
    console.log(true);
  }
  else {
    console.log(false);
  }
}
every(users,{'age':40});















// Js Answer 20 Array/Some

var users = [
  { 'user': 'mo', 'age': 40, 'active': false },
  { 'user': 'omm',   'age': 50, 'active': false }
];
var keysWeNeed=[];
var numberOfTrues=[];
function every(data,condition){
  for(object of data ){
    for(i in object){
          if(Object.keys(condition)==i){
            keysWeNeed.push("VirtualValue");
          }
          if(keysWeNeed.length>=1){
            if(Object.values(condition)==object[i]){
              numberOfTrues.push("VirtualValue");
            }
          }
    }
  }
  if(keysWeNeed.length>=numberOfTrues.length&&numberOfTrues.length!==0){
    console.log(true);
  }
  else {
    console.log(false);
  }
}
every(users,{'user':'omm'});
















// Js Answer 21 Array/findkey

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
function find(array,predicate){
  if(Array.isArray(predicate)){  
for(item of array){
  for(i in item){
     if(predicate[0]==i){
       if(predicate[1]==item[i]){
        console.log(Object.values(item)[0]);
       }
     }
  }
}
}


else {
  for(itemObj of array){
    for(iObj in itemObj){
      if(Object.keys(predicate)[0]==iObj){
        if( Object.values(predicate)[0]==itemObj[iObj]){
         console.log(Object.values(itemObj)[0]);
      }
    }
   }
  }
 }
}
 find(users,['age', 1]);











// Js Answer 22 object/zipobject

NewObject={};
function zipObject(data1,data2){
  let key1=data1[0];
  let key2=data1[1];
  let value1=data2[0];
  let value2=data2[1];
  NewObject[key1]=value1;
  NewObject[key2]=value2;
   console.log(NewObject);
}
zipObject(['a', 'b'],[1, 2]);






// Js Answer 23 Array/find
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
function find(array,predicate){
  if(Array.isArray(predicate)){  
for(item of array){
  for(i in item){
     if(predicate[0]==i){
       if(predicate[1]==item[i]){
        console.log(Object.values(item)[0]);
       }
     }
  }
}
}


else {
  for(itemObj of array){
    for(iObj in itemObj){
      if(Object.keys(predicate)[0]==iObj){
        if( Object.values(predicate)[0]==itemObj[iObj]){
         console.log(Object.values(itemObj)[0]);
      }
    }
   }
  }
 }
}
 find(users,['age', 1]);


// Js Answer 24 Object /omit

var object = { 'a': 1, 'b': '2', 'c': 3 };
var newObject = {};
function omit(data,paths){
 for (objects in data){
  // console.log(paths[1]);
  if(paths[0]==objects ){
    continue
    }
    else if (paths[1]==objects){
      continue;
    }
    else {
      newObject[objects]=data[objects];
      console.log(newObject);
    }
  }
   
 }
omit(object,['a','b'])

















// Js Answer 25 Array/findLastIndex

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false },
  { 'user': 'barney',  'active': true }
];


function findLastIndex(data,predicate,fromIndex){
  for(let i=fromIndex; i<data.length; i++){
    // console.log(data[i]);
    for(j in data[i]){
      // console.log(data[i][j]);
      if(j==Object.keys(predicate)&&data[i][j]==Object.values(predicate)){
            console.log(i);
      }
    }
  }
}
findLastIndex(users,{'user': 'barney'},2);

// Js Answer 26 collection/countBy

NewObject={};
var NewArray=[];
function countBy(data,f){
  for (let i=0; i<data.length;i++){
    NewArray.push(f(data[i]))
  }
  // console.log(NewArray);
  NewArray.forEach((x) => {
   NewObject[x] = (NewObject[x] || 0)+ 1;
  });
 console.log(NewObject);
}
countBy([1,1,2,2.3,4,5],Math.floor)







// Js Answer 27 collection/map
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' },
  { 'user1': 'fred1' }
];
function map(data,identity){
  for(i of data){
    for(j in i ){
         if(j==identity){
            console.log(Object.values(i));
         }
    }
  }
}
map(users,'user')

// Js Answer 28 object/has
var object = { 'a': { 'b': 2 } };
function has (object,path){
  if(Object.keys(object)==path){
       console.log(true);
  }
  else {
    console.log(false);
  }
}
has(object, 'a');


















// Js Answer 29 object/fillter

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
 
function filter(array,predicate){
  if(Array.isArray(predicate)){  
for(item of array){
  for(i in item){
     if(predicate[0]==i){
       if(predicate[1]==item[i]){
        console.log((item));
       }
     }
  }
}
}
 
else {
  for(itemObj of array){
    for(iObj in itemObj){
      if(Object.keys(predicate)[0]==iObj){
        if( Object.values(predicate)[0]==itemObj[iObj]){
         console.log(Object.values(itemObj)[0]);
      }
    }
   }
  }
 }
}
 find(users,['age', 36]);











// Js Answer 30 object/invert
var object = { 'a': 1, 'b': 2, 'c': 1 };
var keys=Object.keys(object);
var values=Object.values(object);
var NewObject={};
function invert(data){
 for(let i=0 ; i<values.length;i++){
  NewObject[values[i]] =keys[i];
 }
  console.log(NewObject);
}
 invert(object);

// Js Answer 31 Array/remove

var array1 = [1, 2, 3, 4];
var slicedArray=[];
function remove(array1){


  var n= function(array1){
    for(i of array1){
       if(i % 2 == 0){
        slicedArray.push(i);
       }
    }
    for(let j=0;j<array1.length; j++){
        if(array1[j]==slicedArray[j]){
          continue
        }
        else{
          array1.splice(j+1,1);
        }
    }
    console.log(array1);
  }
  n(array1);
}


remove(array1);





// Js Answer 32 Array/dropRightWhile

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 function dropRightWhile(array , identity){
  for(objects of array){
    var m=0;
     for(i in objects){
      if(typeof identity !== "object"){
           if(i==Object.keys(identity)[m]&&objects[i]==Object.values(identity)[m]){
               console.log(objects);
           }
           m+=1;
     }


     else if(Array.isArray(identity)==true){
      if(identity[0]==i&&identity[1]==objects[i]){
        console.log(objects);
      }
     }
  }
}


 }
 dropRightWhile(users,['active', false]);



















// Js Answer 33 Array/orderBy

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 var newArray=[];
function orderBy (data,iteratees){
  var final =data.sort(
    (a,b) => a[iteratees] - b[iteratees]
  );
console.log(final);
}
orderBy(users, 'age');

