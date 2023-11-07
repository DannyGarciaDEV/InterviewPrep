// No Repeats Please
// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
//  Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
// but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {
    return str;
  }
  
  permAlone('aab');



//final answer
function permAlone(str) {
  // Function to swap elements at positions a and b in an array.
  function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  // Function to generate all permutations of a string.
  function generatePermutations(arr, n) {
    if (n === 1) {
      // Check if the permutation has repeated consecutive letters.
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
          return;
        }
      }
      count++;
      return;
    }

    for (let i = 0; i < n; i++) {
      generatePermutations(arr, n - 1);
      if (n % 2 === 0) {
        swap(arr, i, n - 1);
      } else {
        swap(arr, 0, n - 1);
      }
    }
  }

  // Convert the input string to an array for easier manipulation.
  const arr = str.split('');
  let count = 0;

  generatePermutations(arr, arr.length);

  return count;
}