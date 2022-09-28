class ArrayBuilder {
  getRandomArbitrary(min, max) {
    const number = +(Math.random() * (max - min + 1) + min).toFixed(2);
    return number;
  }
  createArray(min, max) {
    let row = [];
    let arr = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        row.push(this.getRandomArbitrary(min, max));
      }
      arr.push(row);
      row = [];
    }
    return arr;
  }
}

export default ArrayBuilder;
