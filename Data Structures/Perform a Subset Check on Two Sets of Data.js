

// Data Structures
// Perform a Subset Check on Two Sets of Data
// In this exercise, we are going to perform a subset test on 2 sets of data. We will create a method on our Set data structure called isSubsetOf. This will compare the first set against the second, and if the first set is fully contained within the second, it will return true.

// For example, if setA = ['a','b'] and setB = ['a','b','c','d'], then setA is a subset of setB, so setA.isSubsetOf(setB) should return true.
// Waiting:Your Set class should have a isSubsetOf method.
// Waiting:The first Set should be contained in the second Set.
// Waiting:['a', 'b'].isSubsetOf(['a', 'b', 'c', 'd']) should return true.
// Waiting:['a', 'b', 'c'].isSubsetOf(['a', 'b']) should return false.
// Waiting:[].isSubsetOf([]) should return true.
// Waiting:['a', 'b'].isSubsetOf(['c', 'd']) should return false.
class Set {
    constructor() {
      // This will hold the set
      this.dictionary = {};
      this.length = 0;
    }
    // This method will check for the presence of an element and return true or false
    has(element) {
      return this.dictionary[element] !== undefined;
    }
    // This method will return all the values in the set
    values() {
      return Object.keys(this.dictionary);
    }
    // This method will add an element to the set
    add(element) {
      if (!this.has(element)) {
        this.dictionary[element] = true;
        this.length++;
        return true;
      }
  
      return false;
    }
    // This method will remove an element from a set
    remove(element) {
      if (this.has(element)) {
        delete this.dictionary[element];
        this.length--;
        return true;
      }
  
      return false;
    }
    // This method will return the size of the set
    size() {
      return this.length;
    }
    // This is our union method 
    union(set) {
      const newSet = new Set();
      this.values().forEach(value => {
        newSet.add(value);
      })
      set.values().forEach(value => {
        newSet.add(value);
      })
  
      return newSet;
    }
    // This is our intersection method
    intersection(set) {
      const newSet = new Set();
  
      let largeSet;
      let smallSet;
      if (this.length > set.size()) {
        largeSet = this;
        smallSet = set;
      } else {
        largeSet = set;
        smallSet = this;
      }
  
      smallSet.values().forEach(value => {
        if (largeSet.dictionary[value]) {
          newSet.add(value);
        }
      })
  
      return newSet;
    }
  
    difference(set) {
      const newSet = new Set();
  
      this.values().forEach(value => {
        if (!set.dictionary[value]) {
          newSet.add(value);
        }
      })
  
      return newSet;
    }
    
    isSubsetOf(set) {
      return this.values().every(value => set.has(value));
    }
    // Only change code below this line
    
    // Only change code above this line
  }