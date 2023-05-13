import { sql } from "@vercel/postgres";

export default async function Exercises() {
  const { rows } = await sql`SELECT * FROM exercises`;

  return (
    <>
      <h1 className="text-2xl m-4">Exercises</h1>
      <ul className="m-4">
        {rows.map((row) => (
          <li key={row.id}>{row.exercise_name}</li>
        ))}
      </ul>
    </>
  );
}
