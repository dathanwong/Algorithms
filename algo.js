/**
 * Least Recently Used Cache
 * each cache has a capacity
 * when that capacity is reached, the least recently accessed key/value pair
 * must be flushed to add a new one
 * keep track of when things are accessed to determine when they should be flushed
 * adding, updating, or getting all count as accessing
 */

class LRUCache {
    constructor(capacity) {
      // your code here
      this.count = 0;
      this.capacity = capacity;
      //Least recently used will be at back of the array
      this.items = [];
    }
  
    /**
     * @param {string} key the key to find
     * returns either the value or -1 if not present
     */
    get(key) {
      // your code here
      const index=this.findIndex(key);
      if(index < 0) return -1;
      return this.items[index][key];
    }
  
    findIndex(key){
        //Loop through the array and return the index of the key
      for(let i=0; i<this.items.length; i++){
        if(this.items[i].hasOwnProperty(key)){
            return i;
        }
      }
      return -1;
    }

    /**
     * @param {string} key the key connected to the value
     * @param {any} val the value to either add or update (if already present)
     */
    //use unshift to add to front
    put(key, val) {
      // your code here
      if(this.get(key) > 0){
          //update the value
          const index = this.findIndex(key);
          this.items[index][key] = val;
          //move it to the front
          const item = this.items.splice(index,1);
          this.items.unshift(item);
      }
      else if(this.count < this.capacity){
          //add item to the front
          this.count++;
          this.items.unshift({[key]:val});
      }else{
          //Remove the least recently used
          //Add item to the front
          this.items.pop();
          this.items.unshift({[key]:val});
      }
      console.log(this.items);
    }
  }
  
  const cache = new LRUCache(2); // new cache with capacity of 2
  
  cache.put('key1', 'val1');
  cache.put('key2', 'val2');
  cache.put('key3', 'val3');
  
  console.log(cache.get('key4')); // should log -1, not yet added
  console.log(cache.get('key1')); // should log -1, as it's been flushed
  
  console.log(cache.get('key3')); // should log 'val3'
  cache.put('key4', 'val4');
  
  console.log(cache.get('key2')); // should log -1, as it's been flushed
  console.log(cache.get('key4')); // should log 'val4'

  /**
 * @param {string} honorific
 * @param {string[]} fullNames
 * @return {string[]} names with honorific applied
 * BONUS: use functional programming
 */

function addHonorificToFormattedNames(honorific, fullNames) {
    //Creating an empty array to store the output
    let output = [];
    //Looping through all of the full names
    for(let i=0; i<fullNames.length; i++){
      //Splitting up the names by , and space
      let names = fullNames[i].split(', ');
      //Pushing the names to our output array
      output.push(honorific + ' ' + names[1] + ' ' +names[0]);
    }
    return output;
  }
  
  console.log(addHonorificToFormattedNames('Mr.', ['Smith, Bob', 'Jones, Mike']));
  // should log ['Mr. Bob Smith', 'Mr. Mike Jones']
  
  console.log(addHonorificToFormattedNames('Mrs.', ['HorseDoctor, Beth']));
  // should log ['Mrs. Beth HorseDoctor']
  
  
  /**
   * @param {string} v1
   * @param {string} v2
   * @return {number} 1 if v1 > v2; 0 if they're equal; -1 if v1 < v2
   */
  
  function compareVersions(v1, v2) {
    //Split strings into numbers
    //Compare elements of each strings
    //If first elements are equal then move on
    //Split strings by . into arrays
    let s1 = v1.split('.');
    let s2 = v2.split('.');
    //Finding which array is shorter
    let min = Math.min(s1.length, s2.length);
    //Looping through the elements of each array to compare the numbers
    for(let i = 0; i < min; i++){
        if (s1[i]>s2[i]){
            return 1;
          }
        if (s1[i]<s2[i]){
            return -1;
        }
    }
    //If all the numbers of the arrays are the same and the arrays are the same length then they are equal
    if(s1.length == s2.length){
        return 0;
    }
    //If the s1 array is bigger than the s2 array then we make sure there are no numbers greater than 0
    //If there is a number greater than 0 then s1 is bigger
    if(s1.length > min){
        for(let i = min; i < s1.length; i++){
            if(s1[i] != 0){
                return 1;
            }
        }
        return 0;
    }
    //If the s2 array is bigger than the s1 array then we make sure there are no numbers greater than 0
    //If there is a number greater than 0 then s2 is bigger
    if(s2.length > min){
        for(let i = min; i < s2.length; i++){
            if(s2[i] != 0){
                return -1;
            }
        }
        return 0;
    }

  }

  function compareVersions2(v1, v2){
    let s1 = v1.split('.');
    let s2 = v2.split('.');
    let sum1 = 0;
    let sum2 = 0;
    let i = 0;
    while(i < s1.length || i < s2.length){
        if(s1.length > i) sum1 += +s1[i];
        if(s2.length > i) sum2 += +s2[i];
        if(sum1 > sum2) return 1;
        if(sum2 > sum1) return -1;
        i++;
    }
    return 0;
  }
  
  console.log(compareVersions2('0.1', '1.0')); // should log -1
  console.log(compareVersions2('1.0.1', '1.0')); // should log 1
  console.log(compareVersions2('2.0', '2.0.0')); // should log 0

  /**
 * @param {string} str the input string
 * @return {number} the length of the longest substring with distinct characters
 */

function lengthOfLongestSubstring(str) {
    // your code here
    let window = str.length;
    while(window > 1){
        for(let i = 0; i<= str.length-window; i++){
            let freq = {};
            let finished = true;
            for(let j = i; j < window+i; j++){
                if(freq.hasOwnProperty(str[j])){
                    finished = false;
                    break;
                }else{
                    freq[str[j]] = 1;
                }
            }
            if(finished) return window;
        }
        window--;
    }
    return 1;
  }
  
  console.log(lengthOfLongestSubstring('abcabcbb'));
  // should log 3: 'abc'
  
  console.log(lengthOfLongestSubstring('bbbbb'));
  // should log 1: 'b'
  
  console.log(lengthOfLongestSubstring('pwwkew'));
  // should log 3: 'wke'
  
  
  /**
   * @param {string} str1
   * @param {string} str2
   * @return {boolean}
   * Ignoring case, can the characters from string 2 build string 1?
   */
  
  function canBuildString1FromString2(str1, str2) {
    // your code here
    let obj = {};
    let string1 = str1.toLowerCase()
    let string2 = str2.toLowerCase()
    for (let i = 0; i < string2.length; i++) {
      if (obj.hasOwnProperty(string2[i])) {
        obj[string2[i]]++
      } else {
        obj[string2[i]] = 1
      }
    }
    for (let j = 0; j < string1.length; j++) {
      if (obj.hasOwnProperty(string1[j]) && obj[string1[j]] > 0) {
        obj[string1[j]]--
      } else {
        return false
      }
    }
    return true
  }
  
  'HELLO'.toLowerCase(); // returns 'hello'
  
  console.log(canBuildString1FromString2('Hello World', 'lloeh wordl')); // should log true
  console.log(canBuildString1FromString2('Hey', 'hello')); // should log false
  console.log(canBuildString1FromString2('hello', 'helo')); // should log false
  console.log(canBuildString1FromString2('hello', 'lllheo')); // should log true
  
  
  /**
   * @param {number} hours
   * @param {number} minutes
   * @return {string}
   */
  
  function timeInWords(hours, minutes) {
    // your code here
    if(minutes <= 30){
        if(minutes == 15){
            return "quarter past " + hours;
        }
        else if (minutes == 0){
            return hours + " o'clock";
        }
        else if(minutes == 30){
            return "half past " + hours;
        }
        else{
            return minutes + " minutes past " + hours;
        }
    }else{
        let tempHours = hours;
        if(tempHours == 23) tempHours = 0;
        else tempHours++;
        
        if(minutes == 45){
          return "quarter to " + tempHours;
        }
        else {
          return (60-minutes) + " minutes to " + tempHours;
        }
    }
  }
  
  console.log(timeInWords(5, 15)); // should log 'quarter past 5'
  console.log(timeInWords(5, 30)); // should log 'half past 5'
  console.log(timeInWords(5, 40)); // should log '20 minutes to 6'
  console.log(timeInWords(5, 45)); // should log 'quarter to 6'
  console.log(timeInWords(12, 0)); // should log `12 o'clock`
  console.log(timeInWords(23, 28)); // should log '28 minutes past 23'
  console.log(timeInWords(23, 45)); // should log 'quarter to 0'