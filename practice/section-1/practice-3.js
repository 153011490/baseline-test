'use strict';

function collectSameElements(collectionA, objectB) {
   const result=[];
    for(var ch in collectionA ){
      for(var ch2 in objectB.value){
        if(collectionA[ch]==objectB.value[ch2]){
          result.push(collectionA[ch]);
        }
      }
    }
    return result;
}
