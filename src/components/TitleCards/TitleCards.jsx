import React, {useRef, useEffect, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'

const TitleCards = ({title,category}) => {
    const [apiData, setApiData] = useState([]); //this is for the api
    const cardsRef = useRef();

    //API KEY FOR MOVIE DATA 
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjA1MGMzOTdjZjViMDZiOWIwOGIxOTYyNWQzM2Y2YSIsIm5iZiI6MTc2Mjk0OTU1Ni40NTgsInN1YiI6IjY5MTQ3OWI0YTc3MGZmMzhjNWMwNmUwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X2d3M0-dvs5_EaBDBArlJDZeEQxqlhaF-VHHcdII1bI'
        }
    };


    const handleWheel = (event) => {
        event.preventDefault;
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(()=>{

          fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
          .then(res => res.json())
          .then(res => setApiData(res.results)) //results is the object that we want from the api data
          .catch(err => console.error(err));
        
        cardsRef.current.addEventListener('wheel',handleWheel)}, [])


    return (
        <div className = 'titlecards'>
            <h2>
                {title?title:"Popular On Netflix"}
                {/* Conditional rendering */}
            </h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card,index)=>{
                    return ( <Link to={`/player{}`} className="card" key={index} >
                    <div className='card' key={index} > 
                    <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
                    <p>{card.original_title}</p>
                    </div>
                    </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default TitleCards