import { db } from "@vercel/postgres";

export default async function AddExercise() {
  const { rows } = await db.sql`SELECT * FROM exercises;`;

  return (
    <div className="flex justify-center mx-4 my-8">
      <select
        className="select select-lg w-full max-w-xs"
        defaultValue="default"
      >
        <option value="default" disabled>
          Select an exercise
        </option>
        {rows.map((exercise) => (
          <option key={exercise.id} value={exercise.name}>
            {exercise.name}
          </option>
        ))}
      </select>
      <button className="btn btn-lg mx-4">Add</button>
    </div>
  );
}
