import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="flex space-x-4 absolute right-10">
      <a
        href="https://github.com/francostoll"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black transition-colors duration-300"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/franco-stoll/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 transition-colors duration-300"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};
