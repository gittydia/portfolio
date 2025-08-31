import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="p-8 flex flex-col md:flex-row justify-between text-sm">
      <div className="space-y-1 mb-4 md:mb-0">
        <div>Studio of Eric Van Holtz</div>
        <div>Web Developer</div>
      </div>
      <div className="space-y-1 mb-4 md:mb-0">
        <div>Portland Oregon</div>
        <div className="hover:underline cursor-pointer">hello@vanholtz.co</div>
      </div>
      <div className="space-y-1 mb-4 md:mb-0">
        <div>
          <span className="mr-2 opacity-70">03</span>twitter
        </div>
        <div>
          <span className="mr-2 opacity-70">04</span>instagram
        </div>
        <div>
          <span className="mr-2 opacity-70">05</span>linkedin
        </div>
      </div>
      <div className="space-y-1 mb-4 md:mb-0">
        <div>design</div>
        <div>feint</div>
      </div>
      <div className="text-xs opacity-70 mt-4 md:mt-auto">
        Copyright © 2018 Van Holtz Co. All rights reserved.
      </div>
    </footer>;
};
export default Footer;