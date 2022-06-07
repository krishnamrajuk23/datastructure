// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i= 0; i< arr1.length; i++){
//         const countIndex = arr2.indexOf(arr1[i]**2);
//         if(countIndex === -1){
//             return false;
//         }
       
//         arr2.splice(countIndex, 1);
//          console.log(arr2)
//     }s
//     return true;
// }
//same([1,2,4],[4,1,8]) // O(n^2) solution - time complexity

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
   const frequency1 = {},
    frequency2 = {};
   for(const val of arr1){
     frequency1[val] = (frequency1[val] || 0) + 1;
   }
   for(const val of arr2){
     frequency2[val] = (frequency2[val] || 0) + 1;
   }
   console.log(frequency1, frequency2);
   for(let key in frequency1){
       if(!(key**2 in frequency2)){
           return false;
       }
       if(frequency1[key] !== frequency2[key**2]){
           return false;
      }
   }
   return true;
}

same([1,2,4],[4,1,8]) // O(n) - time complexity