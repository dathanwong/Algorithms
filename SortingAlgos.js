/**
 * takes in an array
 * returns THE SAME array sorted
 * compares adjacent elements
 * and swaps positions if necessary
 * largest elements "bubble" to the top
 * BONUS: fast exit if portion already sorted
 */

function bubbleSort(arr) {
    var sorted = arr.length-1;
    var hasSwaps = false;
    for(let i=0; i<arr.length-1; i++){
      for(let j=1; j<=sorted; j++){
        let swap = 0;
        if(arr[j-1]>arr[j]){
          hasSwaps = true;
          swap = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = swap;
          console.log(arr);
        }
      }
      if(!hasSwaps) return arr;
      hasSwaps = false;
      sorted--;
    }
    return arr;
  }
  
  console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]
  
  
  /**
   * takes in an array
   * returns THE SAME array sorted
   * each time through, select the smallest element
   * at the end, swap it with the element at the current position
   */
  
  function selectionSort(arr) {
    for(var i = 0; i < arr.length-1; i++){
      var min = arr[i];
      var index = i;
      for(var j = i+1; j < arr.length; j++){
        if(arr[j] < min){
          min = arr[j];
          index = j;
        }
      }
      var temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
    return arr;
  }
  
  console.log(selectionSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]

  /**
 * takes in an array
 * returns THE SAME array sorted
 * iterate through each element starting with the second
 * work backwards to "insert" the element
 * in the correct position
 * elements get duplicated forward to make way for the
 * inserted element
 */

function insertionSort(arr) {
  let length = arr.length;
  for (let i = 1; i < length; i++){
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key){
          arr[j + 1] = arr[j];
          j = j -1;
      }
      arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]

/**
 * takes in an array of objects
 * returns THE SAME array sorted
 * choose any sorting algo we've done so far
 * sort the elements by firstName AND THEN lastName
 */

function multiKeySort(arr) {
  let length = arr.length;
  for (let i = 1; i < length; i++){
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && (arr[j].firstName > key.firstName || arr[j].firstName == key.firstName)){
          if(arr[j].firstName == key.firstName){
            if(arr[j].lastName > key.lastName){
              arr[j + 1] = arr[j];
              j = j -1;
            }else{
              break;
            }
          }else{
            arr[j + 1] = arr[j];
            j = j -1;
          }
          
      }
      arr[j + 1] = key;
  }
  return arr;
}

console.log(multiKeySort([
  {
    firstName: 'Lee',
    lastName: 'Babba'
  },
  {
    firstName: 'Lee',
    lastName: 'Abba'
  },
  {
    firstName: 'Adam',
    lastName: 'Smith'
  }
]));

// should log [{ firstName: 'Adam', lastName: 'Smith' }, { firstName: 'Lee', lastName: 'Abba' }, { firstName: 'Lee', lastName: 'Babba' }]

/**
 * takes in two SORTED arrays
 * returns a new sorted array with the combined elements
 */

function combineSortedArrays(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    let output = [];
    while(arr1[index1] || arr2[index2]){
        if(arr1[index1] == null){
          output.push(arr2[index2]);
          index2++;
        }else if(arr2[index2] == null){
            output.push(arr1[index1]);
            index1++;
        }else{
            if(arr1[index1] <= arr2[index2]){
              output.push(arr1[index1]);
              index1++;
            }else{
                output.push(arr2[index2]);
                index2++;
            }
        }
    }
    return output;
  }
  
  console.log(combineSortedArrays([2, 4, 6], [1, 3, 5]));
  // should log [1, 2, 3, 4, 5, 6]
  console.log(combineSortedArrays([1], [3])); // should log [1, 3]
  console.log(combineSortedArrays([1], [])); // should log [1]
  
  
  /**
   * takes in an UNSORTED array
   * divide and conquer approach
   * returns a sorted array
   * function is recursive
   * it uses combineSortedArrays internally
   */
  
  function mergeSort(arr) {
    if(arr.length <2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let firsthalf = mergeSort(arr.slice(0, mid));
    let secondhalf = mergeSort(arr.slice(mid, arr.length));
    return combineSortedArrays(firsthalf, secondhalf);
  }
  
  [1, 2, 3, 4, 5].slice(2); // returns [3, 4, 5]
  [1, 2, 3, 4, 5].slice(2, 4); // returns [3, 4]
  
  console.log(mergeSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]

  /**
 * takes in an array, a start index, and an end index
 * picks a random pivot index around which values will be partitioned
 * returns an integer: the new "pivot" index
 * the array should be mutated by the function
 */

function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    let pivot = Math.floor(Math.random()*(endIndex - startIndex + 1) );
    let pivotValue = arr[pivot];
    while (startIdx != endIdx) {
      while(arr[startIdx] < pivotValue) {
        startIdx++;
      }
      while(arr[endIdx] > pivotValue ) {
        endIdx--;
      }
      // if(pivot == endIdx) {
      //   pivot = startIdx;
      // }
      // else if(pivot == startIdx) {
      //   pivot = endIdx;
      }
      let temp = arr[startIdx];
      arr[startIdx] = arr[endIdx];
      arr[endIdx] = temp;
      return startIdx; // or end index
  }
    
    
    // Math.random() returns a number from 0 up to but excluding 1
    // Math.floor(5.614) returns 5
    
    const arr = [1, 2, 5, 4, 8, 6]
    console.log(arrayPartition(arr)); // should log an index between 0 and 5
    console.log(arr); // should be mutated and partitioned around the returned index
    
    // all values should be partitioned around the returned pivot index
    // for example, if your function chooses a pivot of 3,
    // the returned pivot should be 2 (the new pivot index)
    // the array might now be [1, 2, 4, 8, 5, 6]
    // 4 has all smaller values to its left and all greater values to its right
  //   *************************************************************************************************
  