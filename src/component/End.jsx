/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonCTA from "./ButtonCTA";
import UserTable from "./UserTable";
const End = () => {
  const [cheers, setCheers] = useState("");
  const location = useLocation();
  const score = location.state?.score || 0;
  const playerName = location.state?.playerName;
  useEffect(() => {
    if (score <= 3) {
      setCheers("Oops... You can do better! 😔");
    } else if (score > 3 && score < 7) {
      setCheers("Not Bad! Keep practicing! 🙌");
    } else {
      setCheers("Congratulations! You nailed it! 🚀");
    }
  }, [score]);

  return (
    <>
      <div className="font-poppins text-white">
        <div className="flex justify-center items-center">
          <p className="text-3xl font-bold mt-3 tracking-wide">
            Your Result 🚀
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 gap-6">
          <p className="text-lg font-bold mt-3 tracking-wide">{cheers}</p>
          <p className="text-lg font-bold mt-3 tracking-wide">
            You have scored {score} out of 10
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-center items-center">
        <Link to="/">
          <ButtonCTA title="Re-play 🎮" color="green" />
        </Link>
      </div>
      <div className="mt-5 px-5">
        <UserTable score={score} playerName={playerName}/>
      </div>
    </>
  );
};

export default End;
