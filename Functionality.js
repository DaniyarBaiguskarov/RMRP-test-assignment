class Functionality {
  FindMinimalNumber(arr) {
    let minimal = 101;
    let minimalRow;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (arr[i][j] < minimal) {
          minimal = arr[i][j];
          minimalRow = i;
        }
      }
    }
    return minimalRow;
  }
  FindMinimalPositiveNumber(row) {
    let minimal = 101;
    for (let i = 0; i < 10; i++) {
      if (row[i] < minimal && row[i] > 0) {
        minimal = row[i];
      }
    }

    return minimal;
  }
  FindCountToReplace(row) {
    let arroyOfSignSequences = [];
    let countOfSameSign = 1;
    let count = 0;
    for (let i = 0; i < 10; i++) {
      if (Math.sign(row[i + 1]) === Math.sign(row[i])) {
        countOfSameSign = countOfSameSign + 1;
      } else {
        arroyOfSignSequences.push(countOfSameSign);
        countOfSameSign = 1;
      }
    }
    for (let i = 0; i < arroyOfSignSequences.length; i++) {
      switch (arroyOfSignSequences[i]) {
        case 10:
          count = count + 3;
          break;
        case 8:
          count = count + 2;
          break;
        case 7:
          count = count + 2;
          break;
        case 6:
          count = count + 2;
          break;
        case 5:
          count = count + 1;
          break;
        case 4:
          count = count + 1;
          break;
        case 3:
          count = count + 1;
          break;
      }
    }
    return count;
  }
}
export default Functionality;
