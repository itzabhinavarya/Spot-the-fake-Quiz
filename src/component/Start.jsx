import { Link } from "react-router-dom";
import ButtonCTA from "./ButtonCTA";
const Start = () => {
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
          <div className="mt-5 flex justify-center items-center">
            <Link to="/game">
              <ButtonCTA title="Let's Play 🎮" color="green" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
