/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import ButtonCTA from "./ButtonCTA";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Start = () => {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  const handleUserName = () => {
    if (playerName?.length < 3) {
      toast.error("Please Enter Your Name");
    } else {
      navigate("/game", { state: { playerName } });
    }
  };
  return (
    <>
      <div className="font-poppins text-white">
        <div className="flex justify-center items-center">
          <p className="text-3xl font-bold mt-3 tracking-wide">
            Welcome To Spot-the-fake Quiz 🎮
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-2 justify-center items-center">
          <div className="w-3/4">
            <p className="text-xl font-semibold tracking-wide">
              Rules To Play The Game 🎯
            </p>
          </div>
          <div className="w-3/4 px-5">
            <ul className="list-disc">
              <li className="leading-8 tracking-wide">
                Spot-the-fake is a web-based game that requires the player to
                identify the counterfeit website between two images of a
                website. The two website images are for the same brand, where
                one is an image of the actual website and the other is a fake
                site. The player is given a total of 15 seconds for each pair of
                images to identify the counterfeit website. There are a total of
                10 questions and the player will be shown the total score at the
                end of the game. 10 pairs of image files (for a total of 20
                image files) will be provided, where each pair of image files
                will consist of the correct website image and a fake website
                image.
              </li>
            </ul>
          </div>
          <div className="mt-5 flex justify-center items-center gap-3 w-full">
            <div className="w-1/4">
              <input
                type="text"
                value={playerName}
                onChange={(e) => {
                  setPlayerName(e.target.value);
                }}
                className="mb-2 bg-gray-100 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter Your Name"
                required
              ></input>
            </div>
              <ButtonCTA title="Let's Play 🎮" onClick={handleUserName} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
