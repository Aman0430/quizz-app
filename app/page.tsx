"use client";
import Button from "@/components/ui/Button";
import DropOptions from "@/components/ui/DropDown";
import Image from "next/image";
import { useQuiz } from "./store";

export default function Home() {
  const quizConfig = useQuiz((state: any) => state.config);
  const addNumberOfQuestions = useQuiz(
    (state: any) => state.addNumberOfQuestions
  );
  console.log(quizConfig, "here");

  return (
    <section className="flex min-h-screen flex-col items-center p-24 bg-slate-950">
      {/* <Image src="/icon.svg" alt="icon" width={150} height={150} /> */}
      <h1 className="text-slate-300 text-3xl font-sans">Welcome to Our Quiz</h1>

      <section className="p-10 my-10 rounded-lg shadow-xl w-[65%] bg-slate-800 flex flex-col justify-around gap-3">
        <div>
          <label
            htmlFor="visitors"
            className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
          >
            Number of questions
          </label>
          <input
            type="number"
            id="question"
            onChange={(e) => addNumberOfQuestions(e.target.value)}
            min={0}
            defaultValue={10}
            max={50}
            className="text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
            placeholder="10"
            required
          />
        </div>
        <DropOptions />
        <Button />
      </section>
    </section>
  );
}
