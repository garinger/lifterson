import AddExercise from "@/components/AddExercise";
import Exercise from "@/components/Excercise";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Link href="/" className="text-2xl m-4">
        Lifterson
      </Link>
      {/* @ts-expect-error Server Component */}
      <AddExercise />
      <Exercise name="Highbar Squat" />
      <Exercise name="Bicep Curls" />
      <Link href="/exercises" className="text-lg m-4 hover:underline">
        Exercises
      </Link>
    </>
  );
}
