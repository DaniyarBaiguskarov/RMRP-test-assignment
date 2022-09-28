import ArrayBuilder from "./ArrayBuilder.js";
import Functionality from "./Functionality.js";
import HeaderBulder from "./HeaderBuilder.js";
import RowBuilder from "./RowBuilder.js";

class TableBuilder {
  arr;
  table;
  functionality = new Functionality();
  header;
  rows = "";
  minimalNumber;
  minimalPositiveNumber;
  countToReplace;
  constructor() {
    const headerBuilder = new HeaderBulder();
    this.header = headerBuilder.createHeader();
    const arrBuilder = new ArrayBuilder();
    this.arr = arrBuilder.createArray(-100, 100);
    this.minimalNumber = this.functionality.FindMinimalNumber(this.arr);
  }

  createRows() {
    const rowBuilder = new RowBuilder();
    let containsSmallest;
    let smallest;
    let countToReplace;
    for (let i = 0; i < 10; i++) {
      containsSmallest = this.minimalNumber === i ? true : false;
      smallest = this.functionality.FindMinimalPositiveNumber(this.arr[i]);
      countToReplace = this.functionality.FindCountToReplace(this.arr[i]);
      this.rows =
        this.rows +
        rowBuilder.createRow(
          this.arr[i],
          containsSmallest,
          smallest,
          countToReplace
        );
    }
  }
  createTable() {
    this.createRows();
    this.table = this.header + this.rows;
    return this.table;
  }
}

export default TableBuilder;
