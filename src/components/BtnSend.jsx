export const BtnSend = ({ send }) => {
  return (
    <>
      <button
        type="submit"
        className="w-full h-10 bg-green-600 mt-6 font-sans  text-xl text-slate-50 rounded-md"
        onClick={() => {
          send();
        }}
      >
        Enviar
      </button>
    </>
  );
};
