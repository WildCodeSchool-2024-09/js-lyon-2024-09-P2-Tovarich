const list = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function AlphabetList() {
  return (
    <section className="alphabetBtn">
      {list.map((Alphabet) => (
        <button type="button" key={Alphabet}>
          {Alphabet}
        </button>
      ))}
    </section>
  );
}

export default AlphabetList;
