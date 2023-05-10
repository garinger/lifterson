interface Props {
  number: number;
  deleteSet: (number: number) => void;
}

export default function Set({ number, deleteSet }: Props) {
  return (
    <div className="flex justify-center items-center m-4 gap-10">
      <input type="number" placeholder="Weight" className="input" />
      <select className="select" defaultValue="default">
        <option value="default" disabled>
          Reps
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <select className="select" defaultValue="default">
        <option value="default" disabled>
          RPE
        </option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button className="btn mx-4" onClick={() => deleteSet(number)}>
        Trash
      </button>
    </div>
  );
}
