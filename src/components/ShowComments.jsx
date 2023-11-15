import React from "react";

const ShowComments = ({ commentsShow }) => {
  return (
    <>
      <div className="my-8 flex flex-row">
        <form onSubmit={commentsShow}>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 border-slate-900 rounded-md h-8 w-64 px-2"
          />
          <button className="w-auto h-8 mx-4 bg-green-500 px-2 rounded-md text-slate-50 font-thin">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};

export default ShowComments;
