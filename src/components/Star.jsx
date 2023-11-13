import { useEffect, useState } from "react";
import { BtnSend } from "../components/BtnSend";
import { BtnDisabled } from "../components/BtnDisabled";
import { TextInput } from "../components/TextInput";
import { SelectStar } from "./SelectStar";
import { databaseFirestore } from "./firebase/config";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

export const Star = () => {
  const [star, setStar] = useState(0);
  const [message, setMessage] = useState("");
  const ranking = [1, 2, 3, 4, 5];
  const assessment = collection(databaseFirestore, "assessment");
  const select = (item) => {
    setStar(item);
  };

  const writteMessage = (e) => {
    setMessage(e.target.value);
  };

  const send = () => {
    addDoc(assessment, { comment: message, points: star });
    Swal.fire({
      title: "Calificación enviada",
      text: "¡Muchas gracias por participar de nuestra muestra institucional!",
      icon: "success",
    });
    setMessage("");
    setStar(0);
  };

  useEffect(() => {
    console.log(star);
    console.log(message);
  }, [star, message]);

  return (
    <div>
      <h3 className="italic text-lg">¿Qué te pareció la muestra?</h3>
      <SelectStar
        ranking={ranking}
        setStar={setStar}
        star={star}
        select={select}
      />
      <div className=" flex flex-col mt-6 mx-2">
        <TextInput writteMessage={writteMessage} message={message} />
        {star > 0 ? <BtnSend send={send} /> : <BtnDisabled />}
      </div>
    </div>
  );
};
