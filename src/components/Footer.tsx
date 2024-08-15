export const Footer = () => {
  return (
    <footer className="bg-[#FFFAFA] text-gray-700 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h5 className="font-bold text-lg">PokeApi</h5>
            <p className="text-sm">© 2024 Creado por Franco Stoll ❤</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/FrancoStoll"
              target="_blank"
              className="text-gray-500 hover:text-gray-700"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/franco-stoll/"
              target="_blank"
              className="text-gray-500 hover:text-gray-700"
            >
              Linkedin
            </a>
            <a
              href="https://www.linkedin.com/in/franco-stoll/"
              target="_blank"
              className="text-gray-500 hover:text-gray-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
