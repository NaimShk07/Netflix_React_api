import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";





const Header = () => {
   return (
      <nav className='header'>
         <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />

         <div>
            <Link to="/tvshow">TV Show</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recentlyadded">Recently Added</Link>
            <Link to="/mylist">My List</Link>
         </div>
         <BsSearch />

      </nav>
   );
};

export default Header;