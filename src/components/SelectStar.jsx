import { Svgregular } from "../components/Svgregular";
import { Svgsolid } from "../components/Svgsolid";
export const SelectStar = ({ ranking, select, setStar, star }) => {
  return (
    <div className="mt-4 flex row-auto gap-5 justify-center">
      {ranking.map((item) => (
        <button
          onClick={() => {
            select(item);
          }}
          key={item}
          onMouseOver={() => {
            setStar(item);
          }}
          onMouseOut={() => {
            setStar(item);
          }}
        >
          {star >= item ? <Svgsolid /> : <Svgregular />}
        </button>
      ))}
    </div>
  );
};
