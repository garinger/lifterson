import AddExercise from "@/components/AddExercise";
import Exercise from "@/components/Excercise";

export default async function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <AddExercise />
      <Exercise name="Highbar Squat" />
      <Exercise name="Bicep Curls" />
    </>
  );
}
