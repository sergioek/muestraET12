import React, { useEffect,useState} from 'react'
import { databaseFirestore } from "./firebase/config";
import { getDocs, collection } from "firebase/firestore";

const Score = ({ show }) => {
  const [commentary, setCommentary] = useState([]);
  const [scores, setScores] = useState(0);

  useEffect(() => {
    const assessment = collection(databaseFirestore, "assessment");
    getDocs(assessment)
      .then((response) => {
        setCommentary(
          response.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );

        setScores(
          Math.round(
            commentary.reduce((value, comment) => value + comment.points, 0) /
              parseInt(commentary.length)
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [scores]);

  return (
    <>
      {show && (
        <div className="flex flex-row mt-4 gap-3">
          <p className=" text-lg font-bold">
            {commentary.length} comentarios:
          </p>
          <p className=" text-lg">{scores}</p>

          {scores == 1 && <span className=" text-amber-400 text-lg">★</span>}
          {scores == 2 && <span className=" text-amber-400 text-lg">★★</span>}
          {scores == 3 && <span className=" text-amber-400 text-lg">★★★</span>}
          {scores == 4 && <span className=" text-amber-400 text-lg">★★★★</span>}
          {scores == 5 && (
            <span className=" text-amber-400 text-lg">★★★★★</span>
          )}
        </div>
      )}
    </>
  );
};

export default Score
