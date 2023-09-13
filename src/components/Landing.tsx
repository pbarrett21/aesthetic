import Action from "./Action";
import Brag from "./Brag";
import useWindowDimensions from "../helpers/useWindowDimensions";

const Landing: React.FC = () => {
  const { width, height } = useWindowDimensions();
  console.log(width, height);

  return (
    <>
      <div className="landingPage">
        <div className="img1-container">
          <img className="img1" src="/room1.jpeg" alt="modern living room" />
        </div>
        <Action />
        <Brag />
        <img className="img2" src="/room2.jpeg" alt="modern house" />
      </div>
      <hr />
    </>
  );
};

export default Landing;
