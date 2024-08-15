import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(-1)}
      className="flex absolute right-4 mt-4 z-20 items-center gap-2 cursor-pointer"
    >
      <span className="text-black text-pretty z-20 border-b border-gray-400">
        Back
      </span>
      <div className="p-3 bg-gray-200 cursor-pointer rounded-full">
        <img
          src="/backButton.svg"
          className="h-5 w-5 object-cover"
          alt="button_back.svg"
        />
      </div>
    </div>
  );
};
