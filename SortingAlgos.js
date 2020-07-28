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

  function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {

    let pivotIdx = Math.floor(Math.random() * (endIdx - startIdx) +startIdx);
    let pivot = arr[pivotIdx];
    while (startIdx < endIdx) {
      while (arr[startIdx] < pivot) {
        startIdx++;
      }
      while (arr[endIdx] > pivot) {
        endIdx--;
      }
      if (startIdx < endIdx) {
        let temp = arr[startIdx];
        arr[startIdx] = arr[endIdx];
        arr[endIdx] = temp;
      }
    }
    return startIdx;
  }
  
  // Math.random() returns a number from 0 up to but excluding 1
  // Math.floor(5.614) returns 5
  
  /**
   * takes in an UNSORTED array
   * returns the SAME array sorted
   * working in place, use yesterday's arrayPartition internally
   * and call the function recursively as needed
   */
  
  function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
    if (endIdx - startIdx < 1) {
      return arr;
    }
    let pivotIdx = arrayPartition(arr, startIdx, endIdx);
    quickSort(arr, startIdx, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, endIdx);
    return arr;
  }
  
  console.log(quickSort([1, 5, 2, 8, 3, 4]));
  
  // should log [1, 2, 3, 4, 5, 8]
  
  // check to see if portion of the array we're sorting has at least 2 elements
  // if it does, arrayPartition against that portion
  // quickSort the left and the right portions surrounding the new pivot index
  
  /**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the elements shared by both
 * BONUS: dedupe
 */

function intersectSortedArrays(arr1, arr2) {
    let intersect=[];//arr to store intersected values
    let i=0;//counter for arr1
    let j=0;//counter for arr2
  
    while(i<arr1.length&&j<arr2.length)
    {
      if(arr1[i]<arr2[j])//if arr1 value <arr2 value increment arr1 counter
        i++;
      else if(arr1[i]>arr2[j]) // if arr1 value > arr2 increment arr2 counter
        j++;
      else // if both values are equal or intersect add to intersect array and increment both counters
        {
          intersect.push(arr1[i]);
          i++;
          j++;
        }
  
    }
    return intersect;
  
  }
  
  console.log(intersectSortedArrays([1, 1, 1, 3], [1, 1, 4]));
  // should log [2, 2]
  
  
  function intersectSortedArraysDedupe(arr1, arr2) {
      let dupe={};
      let intersect=[];//arr to store intersected values
      let i=0;//counter for arr1
      let j=0;//counter for arr2
    
      while(i<arr1.length&&j<arr2.length)
      {
        if(arr1[i]<arr2[j])//if arr1 value <arr2 value increment arr1 counter
          i++;
        else if(arr1[i]>arr2[j]) // if arr1 value > arr2 increment arr2 counter
          j++;
        else // if both values are equal or intersect add to intersect array and increment both counters
          {
            if(!dupe[arr1[i]]){
            intersect.push(arr1[i]);
            dupe[arr1[i]]=true;
            }
            i++;
            j++;
          }
    
      }
      return intersect;
    
    
  }
  
  console.log(intersectSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4]));
  // should log [2]

  /**
 * takes in two arrays
 * returns a NEW array
 * with elements that ONLY APPEAR in one array
 * elements in the input arrays NEED NOT BE SORTED
 * the ordering of your output array NEED NOT BE SORTED
 * BONUS: allow it to take in a 2D array
 */

// AKA symmetric difference

function disjunctiveUnion(arr1, arr2) {
    var newarray = [];
    var freqTable = {};
    for(var i=0; i<arr1.length;i++){
      if(freqTable.hasOwnProperty(arr1[i])){
        freqTable[arr1[i]] +=1
      }
      else{
        freqTable[arr1[i]] = 1
      }
      console.log(freqTable);
    }
    for(var i=0; i<arr2.length;i++){
        if(freqTable.hasOwnProperty(arr2[i])){
          freqTable[arr2[i]] +=1
        }
        else{
          freqTable[arr2[i]] = 1
        }
        console.log(freqTable);
      }
    for(var property in freqTable) {
      if(freqTable[property] == 1){
          newarray.push(property);
      }
    }
    return newarray
  }
  
  console.log(disjunctiveUnion([1, 2], [2, 1]));
  // should log [] since 1 and 2 are in both
  console.log(disjunctiveUnion([1, 2, 3], [1, 2]));
  // should log [3]
  
  
  function disjunctiveUnionBonus(arr) {
    var newarray = [];
    var freqTable = {};
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
          if(freqTable.hasOwnProperty(arr[i][j])){
            freqTable[arr[i][j]] +=1
          }
          else{
            freqTable[arr[i][j]] = 1
          }
        }
      }
      for(var property in freqTable) {
        if(freqTable[property] == 1){
            newarray.push(property);
        }
      }
      return newarray
  }
  
  console.log(disjunctiveUnionBonus([
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 5, 6]
  ]));
  // should log [3, 4] or [4, 3]

  /**
 * takes in an array of integers
 * returns an ARRAY of OBJECTS
 * with each one having two key/value pairs: the index and the number
 * the array should have ONLY non-consecutive values
 * the first element of the array is NEVER considered non-consecutive
 */

function allNonConsecutive(arr) {
    let newArr=[];
    for(let idx=0;idx<arr.length-1;idx++){
        if(arr[idx]+1!==arr[idx+1]){
            newArr.push({
              i: idx+1, n: arr[idx+1]
            })
        }
    }
    return newArr;
  }
  
  console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
  // should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives
  
  console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
  // should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives
  
  
  /**
   * takes in an array of integers
   * and a given sum
   * returns an array of ALL the consecutive integers
   * that make the sum
   * BONUS: what if there are zeros in the input array?
   */
  
  function findConsecutiveSums(arr, sum) {
    let output = [];
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        let j = i;
        let array = [];
        while(count < sum || arr[j] == 0){
            count += arr[j];
            array.push(arr[j]);
            if(count == sum){
                output.push(array.slice(0));
            }
            j++;
        }
    }
    return output;
  }
  
  console.log(findConsecutiveSums([2, 5, 3, 6, 0,0, 7, 23, 12], 16));
  // should log [
  //   [2, 5, 3, 6],
  //    [2, 5, 3, 6, 0],
  //   [3, 6, 7]
  // ]


  /**
 * takes in an array of integers
 * returns an array of TWO INDICES
 * the indices should point to the two elements
 * that add up to the given sum
 * assume that there is only one solution
 * numbers can only be used once
 */

function sumTwo(arr, sum) {
    let dict = {};
    let output = [];
    for(let i=0; i<arr.length; i++){
      if(sum-arr[i] in dict){
        output.push(i);
        output.push(dict[sum-arr[i]]);
        return output;
      }
      dict[arr[i]] = i;
    }
    return output;
  }
  
  console.log(sumTwo([2, 7, 11, 15], 9)); // should log [0, 1]
  
  
  /**
   * takes in an array of integers
   * and an integer
   * returns an array of the "k" most frequent values
   * the input array WON'T NECESSARILY BE IN ORDER
   * the output array NEED NOT BE ORDERED
   * you can assume there's always a valid answer
   */
  
  function kMostFrequent(arr, k) {
    let freqDict = {};
    let output = [];
    for(let i=0; i<arr.length; i++){
      !(arr[i] in freqDict) ? freqDict[arr[i]] = 1 : freqDict[arr[i]]++;
    }
    while(output.length < k){
      let maxKey = 0;
      let maxVal = 0;
      for(let key in freqDict){
        if(freqDict[key]>maxVal){
          maxVal = freqDict[key];
          maxKey = key;
        }
      }
      output.push(+maxKey);
      freqDict[maxKey] = 0;
    }
    return output;
  }
  
  console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
  // should log [1, 2] or [2, 1]
  
  console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
  // should log [0]
  
  console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
  // should log [1, 2, 3] in any order
  

  /**
 * takes an object with the ingredients/quanties
 * as the key/value pairs
 * and an object with the available ingredients/quantities
 * as the key/value pairs
 * returns the maximum quantity of the dish that can be prepared
 */

function getMaxServings(recipe, available) {
    // your code here
    let min = Infinity;
    for(let key in recipe){
        let temp = available.hasOwnProperty(key) ? available[key]/recipe[key] : 0;
        if(temp < min) min = temp;
    }
    return min;
  }
  
  const recipe = {
    'organic fat': 99,
    'live squid': 1,
    'birds nest': 1,
    'fried flesh': 1,
    spicy: 5,
    'gourmet memes': 4200
  };
  
  const available = {
    'organic fat': 990,
    'live squid': 0,
    'birds nest': 10,
    'fried flesh': 10,
    spicy: 50,
    'gourmet memes': 42000,
    sugar: 9001,
    spice: 5,
    'everything nice': 1
  };
  
  console.log(getMaxServings(recipe, available)); // should log 0
  
  available['live squid'] = 10;
  
  console.log(getMaxServings(recipe, available)); // should log 10
  
  
  /**
   * takes in an array of ailment objects with a nested array of treatable symptoms
   * and an array of medication objects
   * return the medication(s) that treat the greatest number of the ailments
   */
  
  function getMeds(ailments, medications) {
    // your code here
    let output = [];
    let ails = {};
    let max = 0;
    for(let i = 0; i <ailments.length; i++){
        ails[ailments[i]] = 1;
    }
    for(let j = 0; j < medications.length; j++){
        let count = 0;
        for(let i = 0; i <medications[j].treatableSymptoms.length; i++){
            if(ails.hasOwnProperty(medications[j].treatableSymptoms[i])) count++;
        }
        if(count > max){
          output = [medications[j].name];
          max = count;
        }else if(count == max && max != 0){
            output.push(medications[j].name);
        }
        console.log("temp:" + output);
    }
    return output;
  }
  
  const medications = [
    {
      name: 'Sulforaphane',
      treatableSymptoms: [
        'dementia',
        `alzheimer's`,
        'cancer',
        'inflammation',
        'neuropathy',
      ],
    },
    {
      name: 'Longvida Curcumin',
      treatableSymptoms: [
        'pain',
        'inflammation',
        'depression',
        'arthritis',
        'anxiety',
      ],
    },
    {
      name: 'Hericium erinaceus',
      treatableSymptoms: ['anxiety', 'cognitive decline', 'depression'],
    },
    {
      name: 'Nicotinamide mononucleotide',
      treatableSymptoms: [
        'ageing',
        'low NAD',
        'obesity',
        'mitochondrial myopathy',
        'diabetes',
      ],
    },
    {
      name: 'PainAssassinator',
      treatableSymptoms: [
        'pain',
        'inflammation',
        'cramps',
        'headache',
        'toothache',
        'back pain',
        'fever',
      ],
    },
  ];
  
  console.log(getMeds(['pain'], medications));
  // should log ['PainAssassinator', 'Longvida Curcumin']
  
  console.log(getMeds(['pain', 'inflammation', 'depression'], medications));
  // should log ['Longvida Curcumin']
  
  console.log(getMeds(['existential dread'], medications));
  // should log []

  /**
 * @param {array} arr an array of integers
 * returns THE SAME array ie. WORKING IN PLACE
 * remove every element from the 0 index forward
 * until the callback invoked against the element returns true
 * if it never returns true, the returned mutated array should be empty
 */

function dropIt(arr, callback) {
    for(var i=0; i<arr.length; i++){
      if(callback(arr[i])) break;
    }
    arr.splice(0,i);
    return arr;
  }
    
    const isEven = num => num % 2 === 0
    
    const firstArr = [1, 3, 5, 7, 2, 4, 6];
    const firstResult = dropIt(firstArr, isEven);
    
    console.log(firstResult); // should log [2, 4, 6]
    console.log(firstArr === firstResult); // should log true
    
    const secondArr = [1, 3, 5, 7, 9];
    const secondResult = dropIt(secondArr, isEven);
    
    console.log(secondResult); // should log []
    console.log(secondArr === secondResult); // should log true
    
    
    /**
     * @param {string} str the original string
     * @return {boolean}
     * Can the string characters be rearranged to make a palindrome?
     * palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun.
     */
    
    function couldBePalindrome(str) {
      let freq = {};
      let oddCount = 0;
      for(let i = 0; i < str.length; i++){
          if(freq.hasOwnProperty(str[i])){
            // if(freq[str[i]])
              if(freq[str[i]]%2 === 0) oddCount++;
              else oddCount--;
              freq[str[i]]++;
          }else{
              freq[str[i]] =1;
              oddCount++;
          }
      }
      if(oddCount > 1) return false;
      return true;
    } 
    
    console.log(couldBePalindrome('PPo'));
    // should log true - could be 'PoP'
    
    console.log(couldBePalindrome('oooPP'));
    // should log true - could be 'PoooP'
    
    console.log(couldBePalindrome('Yuuyuu'));
    // should log false

    /**
 * @param {string} str
 * @return {boolean}
 * Are there 2 digits separated by exactly 3 question marks that sum to 10?
 */

function questionMarks(str) {
    // your code here
    let q = 0;
    let num1 = -1;
    let num2 = -1;
    for(let i = 0; i<str.length; i++){
        if(!isNaN(str[i])){
            if(num1 >= 0){
                num2 = parseInt(str[i]);
                //Do logic to check if it adds up to 10
                if(q == 3 && (num1+num2) == 10){
                    return true;
                }
                //logic if we see two numbers but they don't add up to 10 or not 3 question marks
                num1 = num2;
                num2 = -1;
                q = 0;
            }else{
                num1 = parseInt(str[i]);
            }
        }else{
            if(str[i] === '?' && num1 >0){
                q++;
            }
        }
    }
    return false;
  }
  
  parseInt('s') // returns NaN
  parseInt('5') // returns 5
  isNaN(NaN) // returns true
  isNaN(parseInt('9')) // returns false
  
  console.log(questionMarks('aa6?9')); // should log false
  console.log(questionMarks('acc?7??sss?3rr1??????5')); // should log true
  console.log(questionMarks('?3?d?dad?7??????3')); // should log true
  console.log(questionMarks('7??????3')); // should log false
  
  
//   /**
//    * @param {string} str1
//    * @param {string} str2
//    * consisting of lowercase characters and backspaces (#)
//    * @return {boolean} whether the two strings are equivalent after taking the backspaces into consideration
//    * BONUS: solve in O(n)
//    */
  
  function backspaceStringCompare(str1, str2) {
    // your code here
    let backspaces = 0;
    let temp1 = "";
    let temp2 = "";
    for(let i = str1.length-1; i >= 0; i--){
        if(str1[i] !== '#'){
            if(backspaces > 0){
                backspaces--;
            }else{
                temp1 = str1[i]+temp1;
            }
        }else{
            backspaces++;
        }
    }
    backspaces = 0;
    for(let i = str2.length-1; i >= 0; i--){
        if(str2[i] !== '#'){
            if(backspaces > 0){
                backspaces--;
            }else{
                temp2 =str2[i]+temp2;
            }
        }else{
            backspaces++;
        }
    }
    console.log(temp1);
    console.log(temp2);
    return temp1===temp2;
  }
  
  console.log(backspaceStringCompare('ab#c', 'ad#c'));
  // should log true - they both become 'ac'
  
  console.log(backspaceStringCompare('ab##', 'c#d#'));
  // should log true - they both become ''
  
  console.log(backspaceStringCompare('a##c', '#a#c'));
  // should log true - they both become 'c'