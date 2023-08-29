import React, { useEffect, useState } from 'react';
import "./Home.scss";
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const apiKey = '?api_key=e13d660142a64785e100fe0b2c36353f';
const apiUrl = 'https://api.themoviedb.org/3/movie/';
const imgUrl = "https://image.tmdb.org/t/p/original";
const popular = 'popular';
const upcoming = 'upcoming';
const nowPlaying = 'now_playing';
const topRated = 'top_rated';


const Card = ({ img,title }) => {
   return (
      <div className='child_card'>
         <img src={img} alt="" />
         <p style={{whiteSpace:'normal'}}> {title}</p>
      </div>
   );

};

const Row = ({ title, arr = [] }) => {
   return (
      <div className='row'>
         <h1>{title}</h1>
         <div className='card'>
            {
               arr.map((val, index) => (
                  
                     <Card key={index} img={`${imgUrl}${val.poster_path}`} title={val.title} />
                  

               ))
            }

         </div>
      </div>
   );
};

const Home = () => {
   const [popularVar, setpopularVar] = useState([]);
   const [upcomingVar, setupcomingVar] = useState([]);
   const [nowPlayingVar, setnowPlayingVar] = useState([]);
   const [topRatedVar, settopRatedVar] = useState([]);
   const [genreVar, setgenreVar] = useState([]);

   useEffect(() => {
      const fetchpopular = async () => {
         const { data: { results } } = await axios.get(`${apiUrl}${popular}${apiKey}`);
         setpopularVar(results);
      };
      const fetchupcoming = async () => {
         const { data: { results } } = await axios.get(`${apiUrl}${upcoming}${apiKey}`);
         setupcomingVar(results);
      };
      const fetchnowPlaying = async () => {
         const { data: { results } } = await axios.get(`${apiUrl}${nowPlaying}${apiKey}`);
         setnowPlayingVar(results);
      };
      const fetchtopRated = async () => {
         const { data: { results } } = await axios.get(`${apiUrl}${topRated}${apiKey}`);
         settopRatedVar(results);
      };
      const fetchgenre = async () => {
         const { data: { genres } } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list${apiKey}`);
         setgenreVar(genres);
      };

      fetchpopular();
      fetchupcoming();
      fetchnowPlaying();
      fetchtopRated();
      fetchgenre();



   }, []);

   return (
      <section className='home'>
         <div className="banner" style={{
            background:
               popularVar[0] ? `url(${`${imgUrl}/${popularVar[0].backdrop_path}`}) center center/cover no-repeat` : 'none'
         }} >
            <Header />

         </div>
         <div className="genre">
            {
               genreVar.map((val, index) => (
                  <Link key={index} >{val.name}</Link>
               ))
            }
         </div>

         <Row title={'Popular on Netflix'} arr={popularVar} />
         <Row title={'Top Rated'} arr={topRatedVar} />
         <Row title={'Upcoming'} arr={upcomingVar} />
         <Row title={'Now Playing'} arr={nowPlayingVar} />

      </section>

   );
};

export default Home;