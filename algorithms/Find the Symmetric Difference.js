// Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference.
//  The returned array must contain only unique values (no duplicates).


function sym() {
    // Function to find the symmetric difference of two arrays.
    function symmetricDiff(arr1, arr2) {
      return arr1
        .filter(item => !arr2.includes(item))
        .concat(arr2.filter(item => !arr1.includes(item)));
    }
  
    // Start with the symmetric difference of the first two arrays.
    let result = symmetricDiff(arguments[0], arguments[1]);
  
    // Iterate through additional arrays and find their symmetric difference with the result.
    for (let i = 2; i < arguments.length; i++) {
      result = symmetricDiff(result, arguments[i]);
    }
  
    // Remove duplicates by converting to a Set and back to an array.
    return [...new Set(result)];
  }

