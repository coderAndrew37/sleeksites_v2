// components/blog/QuizComponent.tsx
"use client";

import { JSX, useState } from "react";
import { Quiz, QuizQuestion } from "../types/blog";

interface QuizComponentProps {
  quiz: Quiz;
  onComplete: () => void;
}

export function QuizComponent({
  quiz,
  onComplete,
}: QuizComponentProps): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const question: QuizQuestion = quiz.questions[currentQuestion];

  const handleAnswerSelect = (optionIndex: number): void => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = (): void => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const correctAnswers = quiz.questions.reduce((acc, q, index) => {
        const selectedOptionIndex = selectedAnswers[index];
        return selectedOptionIndex !== undefined &&
          q.options[selectedOptionIndex].correct
          ? acc + 1
          : acc;
      }, 0);

      setScore(correctAnswers);
      setShowResults(true);
      onComplete();
    }
  };

  const handlePrevious = (): void => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (showResults) {
    return (
      <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white text-center shadow-2xl animate-in fade-in zoom-in duration-500">
        <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
          Results
        </span>
        <h3 className="text-4xl font-bold tracking-tight mt-4 mb-2">
          Quiz Complete
        </h3>
        <div className="text-6xl font-black text-white my-8">
          {score}
          <span className="text-slate-500">/</span>
          {quiz.questions.length}
        </div>
        <p className="text-slate-400 text-lg font-light mb-10 max-w-sm mx-auto">
          {score === quiz.questions.length
            ? "Perfect! You've mastered the concepts in this article."
            : score >= quiz.questions.length * 0.7
              ? "Great job! You have a solid grasp of the material."
              : "Interesting insights. A quick re-read might fill in the gaps!"}
        </p>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswers([]);
            setShowResults(false);
            setScore(0);
          }}
          className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 my-12 transition-all">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div className="space-y-1">
          <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">
            Knowledge Check
          </span>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            {quiz.title}
          </h3>
        </div>
        <div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 tracking-tighter">
          {currentQuestion + 1} of {quiz.questions.length}
        </div>
      </div>

      <div className="mb-10">
        <h4 className="text-xl md:text-2xl font-medium text-slate-800 leading-tight mb-8">
          {question.question}
        </h4>
        <div className="grid grid-cols-1 gap-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswers[currentQuestion] === index;
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`group w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  isSelected
                    ? "border-blue-600 bg-white shadow-md ring-4 ring-blue-600/5"
                    : "border-transparent bg-white/50 hover:bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? "border-blue-600 bg-blue-600"
                        : "border-slate-300 group-hover:border-slate-400"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    )}
                  </div>
                  <span
                    className={`text-[17px] transition-colors ${isSelected ? "text-slate-900 font-bold" : "text-slate-600"}`}
                  >
                    {option.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 pt-8">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 disabled:opacity-0 transition-all"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestion] === undefined}
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all disabled:opacity-50 disabled:grayscale"
        >
          {currentQuestion === quiz.questions.length - 1
            ? "See Results"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
}
