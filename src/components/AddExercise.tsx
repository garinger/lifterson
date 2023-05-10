export default function AddExercise() {
  return (
    <div className="flex justify-center mx-4 my-8">
      <select
        className="select select-lg w-full max-w-xs"
        defaultValue="default"
      >
        <option value="default" disabled>
          Select an exercise
        </option>
        <option value="Bench">Bench</option>
        <option value="Bicep Curls">Bicep Curls</option>
        <option value="Highbar Squat">Highbar Squat</option>
      </select>
      <button className="btn btn-lg mx-4">Add</button>
    </div>
  );
}
