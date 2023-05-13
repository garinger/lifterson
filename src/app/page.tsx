import AddExercise from "@/components/AddExercise";
import Exercise from "@/components/Excercise";

async function getData() {
  const res = await fetch("https://cat-fact.herokuapp.com/facts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <h1 className="text-2xl m-4">Lifterson</h1>
      <AddExercise />
      <Exercise name="Highbar Squat" />
      <Exercise name="Bicep Curls" />
      <p>{data[0].text}</p>
    </>
  );
}
