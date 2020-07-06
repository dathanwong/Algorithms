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
    for(var i = 0; i < arr.length; i++){
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