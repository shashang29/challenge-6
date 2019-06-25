let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

let array2 = [];
let array3 = [];
//to sort it in ascending order
array.sort(function (a,b) {
    return a - b; 
});

//to organise each type in its own array inside the main array
function sort1(arr, arr1, arr3){

  for (let i = 0; i < arr.length; i++ ){
 
    if (arr[i] === arr[i + 1] ){
      arr1.push(arr[i]);
      }
    else if(arr[i]=== arr[i-1]){
      arr1.push(arr[i]);
      arr3.push(arr1);
      arr1=[];
      }
    
    else{
      arr3.push(arr[i]);
    }
  }
}
sort1(array, array2, array3);
console.log(array3);
