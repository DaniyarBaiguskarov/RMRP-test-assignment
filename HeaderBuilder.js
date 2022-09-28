class HeaderBulder {
  createHeader() {
    let header = "Digits";
    header = header.padStart(45, " ").padEnd(87, " ") + " |";
    header =
      header + "  IsSmallest  |" + " Smallest |" + " CountToReplace" + "\n";
    return header;
  }
}
export default HeaderBulder;
