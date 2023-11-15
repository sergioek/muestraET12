import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { databaseFirestore } from "./firebase/config";
import { getDocs, collection } from "firebase/firestore";
import Review from "./Review";
import ShowComments from "./ShowComments";
import Swal from "sweetalert2";
import Score from "./Score";

export const Comments = () => {
  const [post, setPost] = useState([]);
  const [show, setShow] = useState(false);


  useEffect(() => {
    const assessment = collection(databaseFirestore, "assessment");
    getDocs(assessment)
      .then((response) => {
        setPost(
          response.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const commentsShow = (e) => {
    if (e.target.password.value == "860224900") {
      setShow(true);
    } else {
      e.preventDefault();
      Swal.fire({
        title: "Error",
        text: "La contraseña ingresada no es correcta",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <img src="/img/logo.PNG" alt="logo-tecnica" className="w-36 h-auto" />
        </div>
        <h1 className="font-normal font-mono text-xl md:text-5xl mt-2 flex wrap justify-center">
          Muestra Anual Institucional 2023
        </h1>
        <div className="flex flex-col items-center">
          <Score show={show} />
          {post == 0 ? (
            <p className="my-8 text-lg font-sans text-blue-800">
              Sin comentarios
            </p>
          ) : show ? (
            post.map((doc) => (
              <Review comment={doc.comment} points={doc.points} key={doc.id} />
            ))
          ) : (
            <ShowComments commentsShow={commentsShow} />
          )}
        </div>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
};
