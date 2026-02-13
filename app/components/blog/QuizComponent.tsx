// components/blog/QuizComponent.tsx
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
      // Calculate score
      const correctAnswers = quiz.questions.reduce((acc, question, index) => {
        const selectedOptionIndex = selectedAnswers[index];
        if (
          selectedOptionIndex !== undefined &&
          question.options[selectedOptionIndex].correct
        ) {
          return acc + 1;
        }
        return acc;
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
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quiz Results
          </h3>
          <div className="text-4xl font-bold text-blue-700 mb-4">
            {score} / {quiz.questions.length}
          </div>
          <p className="text-gray-600 mb-6">
            {score === quiz.questions.length
              ? "Perfect score! Excellent work!"
              : score >= quiz.questions.length * 0.7
              ? "Great job! You have a good understanding."
              : "Keep learning! Review the material and try again."}
          </p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswers([]);
              setShowResults(false);
              setScore(0);
            }}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
          >
            Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">{quiz.title}</h3>
          <span className="text-gray-500 text-sm">
            {currentQuestion + 1} of {quiz.questions.length}
          </span>
        </div>
        {quiz.description && (
          <p className="text-gray-600">{quiz.description}</p>
        )}
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          {question.question}
        </h4>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selectedAnswers[currentQuestion] === index
                  ? "border-blue-700 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                    selectedAnswers[currentQuestion] === index
                      ? "border-blue-700 bg-blue-700"
                      : "border-gray-300"
                  }`}
                >
                  {selectedAnswers[currentQuestion] === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-700">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-6 py-3 rounded-xl font-semibold border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestion] === undefined}
          className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === quiz.questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
