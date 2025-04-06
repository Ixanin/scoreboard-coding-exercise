const Footer = () => {
  return (
    <footer className="mt-auto py-4 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          View this project on{' '}
          <a
            href="https://github.com/Ixanin/scoreboard-coding-exercise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
