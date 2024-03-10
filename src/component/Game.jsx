/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import correct1 from "../assets/websiteImage/1-correct.png";
import fake1 from "../assets/websiteImage/1-fake.png";
import correct2 from "../assets/websiteImage/2-correct.png";
import fake2 from "../assets/websiteImage/2-fake.png";
import correct3 from "../assets/websiteImage/3-correct.png";
import fake3 from "../assets/websiteImage/3-fake.png";
import correct4 from "../assets/websiteImage/4-correct.png";
import fake4 from "../assets/websiteImage/4-fake.png";
import correct5 from "../assets/websiteImage/5-correct.png";
import fake5 from "../assets/websiteImage/5-fake.png";
import correct6 from "../assets/websiteImage/6-correct.png";
import fake6 from "../assets/websiteImage/6-fake.png";
import correct7 from "../assets/websiteImage/7-correct.png";
import fake7 from "../assets/websiteImage/7-fake.png";
import correct8 from "../assets/websiteImage/8-correct.png";
import fake8 from "../assets/websiteImage/8-fake.png";
import correct9 from "../assets/websiteImage/9-correct.png";
import fake9 from "../assets/websiteImage/9-fake.png";
import correct10 from "../assets/websiteImage/10-correct.png";
import fake10 from "../assets/websiteImage/10-fake.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonCTA from "./ButtonCTA";
const initialQuestions = [
  { id: 1, correctImage: correct1, fakeImage: fake1 },
  { id: 2, correctImage: correct2, fakeImage: fake2 },
  { id: 3, correctImage: correct3, fakeImage: fake3 },
  { id: 4, correctImage: correct4, fakeImage: fake4 },
  { id: 5, correctImage: correct5, fakeImage: fake5 },
  { id: 6, correctImage: correct6, fakeImage: fake6 },
  { id: 7, correctImage: correct7, fakeImage: fake7 },
  { id: 8, correctImage: correct8, fakeImage: fake8 },
  { id: 9, correctImage: correct9, fakeImage: fake9 },
  { id: 10, correctImage: correct10, fakeImage: fake10 },
];

const QuestionLength = Array.from(
  { length: initialQuestions.length },
  (_, index) => index + 1
);

// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

var shuffledArray = [];
var shuffledQuestionIndex = [];

function reRun() {
  shuffledArray = shuffleArray([...QuestionLength]);
  shuffledQuestionIndex = [...shuffledArray];
}

reRun();

const shuffledQuestions = initialQuestions.map((question) => {
  const shouldSwap = Math.random() > 0.5;
  return {
    id: question.id,
    correctImage: shouldSwap ? question.fakeImage : question.correctImage,
    fakeImage: shouldSwap ? question.correctImage : question.fakeImage,
  };
});
console.log(shuffledQuestions);
const Game = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(15);
  const [questions, setQuestions] = useState(shuffledQuestions);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      toast.error("Question Missed ☹️");
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimer(15);
    }
  }, [timer]);

  useEffect(() => {
    if (currentQuestion === questions.length) {
      navigate("/end", { state: { score } });
    }
  }, [currentQuestion, questions.length, navigate, score]);

  const handleAnswer = (selectedImage) => {
    if (selectedImage?.includes("fake")) {
      setScore((prevScore) => prevScore + 1);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimer(15);
      toast.success("Right Answer 🥳");
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimer(15);
      toast.error("Wrong Answer 😥");
    }
  };

  const handleImageClick = (image) => {
    handleAnswer(image);
  };

  const currentQuestionIndex = shuffledQuestionIndex[currentQuestion];
  const currentQuestionData = questions[currentQuestionIndex - 1];

  return (
    <>
      <div className="px-5 font-poppins text-white">
        <div className="flex justify-center items-center">
          <p className="text-2xl font-medium tracking-wide">
            Game Started,
            <span className="text-green-500"> All the best 🙌</span>
          </p>
        </div>

        <div className="flex justify-between items-center mt-4 mb-3">
          <div>
            <p className="text-sm font-medium">
              Click on image to select your answer
            </p>
          </div>
          <div className="relative -left-14">
            <h2 className="text-lg font-medium tracking-wide">
              Question {currentQuestion + 1}
            </h2>
          </div>
          <div>
            <Link to="/">
              <ButtonCTA title="Back to Home" />
            </Link>
          </div>
        </div>

        <div className="md:flex w-full gap-4 mt-1 bg-black p-3">
          <div>
            <img
              // src={questions[currentQuestion]?.correctImage}
              src={currentQuestionData?.correctImage}
              // onClick={() =>
              //   handleImageClick(questions[currentQuestion]?.correctImage)
              // }
              onClick={() =>
                handleImageClick(currentQuestionData?.correctImage)
              }
            />
          </div>
          <div>
            <img
              // src={questions[currentQuestion]?.fakeImage}
              // onClick={() =>
              //   handleImageClick(questions[currentQuestion]?.fakeImage)
              // }
              src={currentQuestionData?.fakeImage}
              onClick={() => handleImageClick(currentQuestionData?.fakeImage)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2 font-poppins">
        <div className="bg-gray-200 rounded-lg shadow-lg px-4 py-2">
          <p className="text-xl font-semibold mb-1">
            Time left: <span className="text-red-500">{timer} seconds</span>
          </p>
          <p className="text-xl font-semibold">
            Score: <span className="text-green-500">{score}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Game;
