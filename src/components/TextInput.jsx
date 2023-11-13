export const TextInput = ({ writteMessage, message }) => {
  return (
    <>
      <textarea
        name="text"
        cols="60"
        rows="10"
        className=" text-sm w-full h-20 text-start border-slate-900 border-2 rounded-md px-2"
        value={message}
        onChange={(e) => {
          writteMessage(e);
        }}
      >
        {message}
      </textarea>
    </>
  );
};
