const wordSearch = (letters, word) => {
  //    step 1: create a string out of each horizontal row
  const rows = letters.map(ls => ls.join(''));

  // step 2: make a string out of each vertical column
  let columnArr = [];

  // step 2A: go inside rows
  for (let row = 0; row < letters.length; row++) {

    // step 2B: go inside columns of row
    for (let column = 0; column < letters[row].length; column ++) {

      //  step 2C: create an array for each column (to search for vertical answers)
      if (row === 0) {
        columnArr.push([letters[row][column]]);
      } else {
        columnArr[column].push(letters[row][column]);
      }
    }
  }
  // step 2D: make a string out of the vertical arrays
  const columns = columnArr.map(ls => ls.join(''));

  let result = false; // sets default value to false, in case we don't find the word in array

  if (letters.length < 1 || word.length < 1) {
    result = false;
  }
  for (let l of columns) {
    //   search through columns for word
    if (l.includes(word)) {
      result = true;
      break;
    }
        
  }

  //   search horizontally
  for (let l of rows) {
    //   search through rows for word
    if (l.includes(word)) {
      result = true;
      break;
    }
  }
  return result;
};


module.exports = wordSearch;

// Worked on code with Swapnil @LHL