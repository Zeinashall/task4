import "../app/globals.css";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="footer-container flex flex-col md:flex-row items-center justify-between w-full">
          <a href="#" className="footer-item flex items-center mb-4 md:mb-0 text-white no-underline transition-colors duration-300 hover:text-[rgb(134,6,6)]">
            <i className="fas fa-map-marker-alt footer-icon text-2xl mr-2"></i>
            <span>Geesthachter Straße 136 C, 21502, Deutschland</span>
          </a>
          <a href="#" className="footer-item flex items-center mb-4 md:mb-0 text-white no-underline transition-colors duration-300 hover:text-[rgb(134,6,6)]">
            <i className="fas fa-phone footer-icon text-2xl mr-2"></i>
            <span>+49 176-83635728</span>
          </a>
          <a  href="#"className="footer-item flex items-center mb-4 md:mb-0 text-white no-underline transition-colors duration-300 hover:text-[rgb(134,6,6)]">
            <i className="fas fa-envelope footer-icon text-2xl mr-2"></i>
            <span>zeinaalshal@gmail.com</span>
          </a>
          <div className="footer-credit text-center mt-4 md:mt-0 text-sm text-gray-300">
            <span>Designed by Zeina Alshall</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
