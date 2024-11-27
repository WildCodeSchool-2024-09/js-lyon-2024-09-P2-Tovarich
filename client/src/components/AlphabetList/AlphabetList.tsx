interface letterProps {
  letter: string;
  setLetter: (letter: string) => void;
}

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
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function AlphabetList({ setLetter }: letterProps) {
  return (
    <div className="alphabetBtn">
      {list.map((Alphabet) => (
        <button
          type="button"
          key={Alphabet}
          onClick={() => setLetter(Alphabet)}
        >
          {Alphabet}
        </button>
      ))}
    </div>
  );
}

export default AlphabetList;
