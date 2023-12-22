"use client";

import { cn } from "@/lib/utils";
import { useQuiz } from "../store";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/ui/skeleton";
import { Player } from "@lottiefiles/react-lottie-player";

type questionT = {
  answers: string[];
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
  type: string;
};

export default function Quiz() {
  const [questions, setQuestions] = useState<any>(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const changeStatus = useQuiz((state: any) => state.changeStatus);
  const config = useQuiz((state: any) => state.config);
  const addLevel = useQuiz((state: any) => state.addLevel);
  const addCategory = useQuiz((state: any) => state.addCategory);
  const addType = useQuiz((state: any) => state.addType);
  const addQuestionNumber = useQuiz((state: any) => state.addQuestionNumber);
  const setScore = useQuiz((state: any) => state.setScore);

  useEffect(() => {
    async function getQuestions() {
      setLoading(true);
      const { results } = await (
        await fetch(
          `https://opentdb.com/api.php?amount=${config.numberOfQuestion}&category=${config.category.id}&difficulty=${config.level}&type=${config.type}`
        )
      ).json();
      console.log(results);
      if (results) {
        let shuffledResults = results.map((e: questionT) => {
          let value = [...e.incorrect_answers, e.correct_answer]
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
          e.answers = [...value];
          return e;
        });

        console.log(shuffledResults, "shuffeled");
        setQuestions([...shuffledResults]);
        setLoading(false);
      }
    }
    getQuestions();
  }, [config.category, config.level, config.numberOfQuestion, config.type]);

  const answerCheck = (ans: string) => {
    if (ans === questions[0].correct_answer) {
      setScore();
    }
    setAnswer(questions[0].correct_answer);
  };
  const handleNext = () => {
    let remainingQuestions = [...questions];
    remainingQuestions.shift();
    setQuestions([...remainingQuestions]);
    setAnswer("");
  };

  return (
    <section className="flex flex-col justify-center items-center p-20 bg-slate-950 min-h-screen font-sans text-yellow-100">
      {questions?.length ? (
        <h1 className="mb-4 text-4xl leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
          Question No{" "}
          <span className="text-blue-300 dark:text-blue-500">
            #{config.numberOfQuestion - questions.length + 1}
          </span>
          .
        </h1>
      ) : null}
      {loading && (
        <div className="flex flex-col">
          <Skeleton className="w-[600px] h-[60px] my-10 rounded-sm bg-slate-600" />

          <Skeleton className="w-[600px] h-[500px] rounded-sm bg-slate-600" />
        </div>
      )}

      {!loading && !!questions?.length && (
        <p className="text-2xl ">Score: {config.score}</p>
      )}

      {!questions?.length && !loading && (
        <div className="flex flex-col justify-center items-center">
          <Player
            src="https://assets6.lottiefiles.com/packages/lf20_touohxv0.json"
            className="player"
            loop
            autoplay
            style={{ height: "400px", width: "400px" }}
          />
          <h1 className="mt-10 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            YOUR SCORE :{" "}
            <span className="font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {config.score}
            </span>
          </h1>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-slate-700 hover:bg-blue-400 my-10 text-white py-2 px-10 border border-gray-400 rounded shadow"
          >
            Start Over
          </button>
        </div>
      )}

      {!questions && <p className="text-white"></p>}
      {!!questions && !!questions?.length && (
        <section className="shadow-md bg-slate-800 my-6 p-8 md:p-15 w-[70%] rounded-lg flex flex-col justify-center items-center">
          <h4 className="mb-4 text-center text-lg leading-none tracking-tight md:text-2xl lg:text-4xl dark:text-blue-500">
            {questions[0].question}
          </h4>
          <div className="flex justify-evenly items-center w-full my-14 md:my-16 flex-wrap flex-col md:flex-row">
            {questions[0].answers.map((e: string) => {
              return (
                <button
                  key={e}
                  onClick={() => answerCheck(e)}
                  className={cn(
                    "w-[98%] my-4 bg-slate-700 hover:bg-blue-600 hover:text-gray-100 transition ease-in-out text-yellow-100 font-semibold py-4 px-4 rounded-lg shadow-2xl md:w-[40%]",
                    {
                      "bg-blue-500": !!answer && answer === e,
                      "bg-red-500": !!answer && answer !== e,
                      "hover:bg-blue-500": !!answer && answer === e,
                      "hover:bg-red-500": !!answer && answer !== e,
                      "text-gray-200": !!answer,
                    }
                  )}
                >
                  {e}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="bg-white hover:bg-yellow-200 text-gray-800 font-sans py-2 px-8 border border-gray-400 rounded shadow"
          >
            Next
          </button>
        </section>
      )}
    </section>
  );
}
