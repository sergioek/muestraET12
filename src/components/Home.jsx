import Video from "/video/video.mp4";
import { Star } from "../components/Star";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <video src={Video} autoPlay loop muted className="video" />
      <div className="content">
        <div className="flex justify-center">
          <img src="/img/logo.PNG" alt="logo-tecnica" className="w-36 h-auto" />
        </div>
        <h1 className="font-normal font-mono text-xl md:text-5xl mt-2 flex wrap justify-center">
          Muestra Anual Institucional 2023
        </h1>
        <div className="star">
          <Star />
        </div>
        <Link to="/comentarios">Ver comentarios</Link>
      </div>
    </div>
  );
};
