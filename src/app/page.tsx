import AddExercise from "@/components/AddExercise";
import Exercise from "@/components/Excercise";

export default function Home() {
  return (
    <>
      <h1 className="m-4">Lifterson</h1>
      <AddExercise />
      <Exercise name="Highbar Squat" />
      <Exercise name="Bicep Curls" />
    </>
  );
}
