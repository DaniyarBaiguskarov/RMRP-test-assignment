class RowBuilder {
  createRow(row, containsSmallest, smallest, countToReplace) {
    let adaptedRow = [];
    for (let i = 0; i < 10; i++) {
      adaptedRow.push(row[i].toString().padStart(6, " "));
    }
    let contains = containsSmallest ? "      *      " : "             ";
    const rowToString =
      adaptedRow.join(" | ") +
      " |" +
      contains +
      " |" +
      smallest.toString().padStart(9, " ") +
      " |" +
      countToReplace.toString().padStart(7, " ") +
      "\n";

    return rowToString;
  }
}
export default RowBuilder;
