import { useNavigate } from "react-router-dom";

const UndefinedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page not found</p>
        <img
          src="https://placekitten.com/400/300"
          alt="404 Cat"
          className="mb-8 rounded-lg shadow-lg"
        />
        <p className="text-lg text-gray-700">
          Oops! Looks like you got lost in the internet jungle.
        </p>
        <p className="text-lg text-gray-700">
          Let's get you back to the right path.
        </p>
        <button
          className="mt-4 px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition duration-300"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default UndefinedPage;
