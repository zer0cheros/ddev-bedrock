import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white py-8 h-[10vh]">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Zer0cheros. All rights reserved.
            </p>
            <ul className="social-links flex justify-between gap-6 items-center">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      );
}

export default Footer