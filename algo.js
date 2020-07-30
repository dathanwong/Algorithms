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