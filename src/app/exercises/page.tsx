import { db } from "@vercel/postgres";

export default async function Exercises() {
  const { rows } = await db.sql`SELECT * FROM exercises;`;

  async function addExercise(data: any) {
    "use server";
    const exercise = data.get("name");
    if (exercise) {
      await db.sql`INSERT INTO exercises VALUES (DEFAULT, ${exercise});`;
    }
  }

  return (
    <>
      <form action={addExercise}>
        <input
          type="text"
          name="name"
          placeholder="Add New Exercise"
          className="input input-bordered w-full max-w-xs m-4"
        />
        <button className="btn">Add</button>
      </form>

      <ul className="m-4">
        {rows.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </>
  );
}
