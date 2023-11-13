const Review = ({ comment, points }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-4 w-1/2">
      <div className="flex items-center mb-2">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="/img/usuario.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-2">
          <h3 className="text-lg font-semibold">{}</h3>
          <div className="text-yellow-500">
            {/* Add star icons or rating text */}
            {Array.from({ length: points }).map((_, index) => (
              <span key={index} className="mr-1">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-start mx-14">
        <p className="text-gray-700">{comment}</p>
      </div>
    </div>
  );
};

export default Review;
