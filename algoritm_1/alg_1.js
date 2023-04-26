// -------------------------------
// -------------------------------

//-------------------------------
// Урок Алгоритмы 24.04.23.


// const array = [1,2,3,5,6,8,9,-1,-5];

// let sumArr = array[0];
// for(let i = 1;i< array.length;i++){

// if(array[i] < sumArr){
// sumArr = array[i]

// }
// }

// console.log(sumArr);

// ------------------------

// let array = [1,-2,3,5,-6,8,-9,-1,-5];
// let min = array[0];
// let min2 = min;
// for(let i=1; i<array.length;i++){
//     if(array[i]<min){
//         min=array[i];
//     }
//     else if(array[i]<min2){
//         min2=array[i];
//     }
   


// }
// console.log(min);
// console.log(min2);

// --------------------------

function find(arr) {
    if(arr.length < 2) {
      return undefined;
    }
    
    let min1 = Infinity
    let min2 = Infinity
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] < min1) {
        min2 = min1;
        min1 = arr[i]; 
      } else if(arr[i] < min2) {
        min2 = arr[i];
      }
    }
    return [min1, min2];
  }