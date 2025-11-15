import React, {useEffect} from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'


const Player = () => {

    const [apiData, setApiData] = useState({
        name:"",
        key:"",
        published_at:"",
        typeof:""
    })

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjA1MGMzOTdjZjViMDZiOWIwOGIxOTYyNWQzM2Y2YSIsIm5iZiI6MTc2Mjk0OTU1Ni40NTgsInN1YiI6IjY5MTQ3OWI0YTc3MGZmMzhjNWMwNmUwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X2d3M0-dvs5_EaBDBArlJDZeEQxqlhaF-VHHcdII1bI'
  }
};

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/1062722/videos?language=en-US', options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
    }, [])

    return (
        <div className='player'>
            <img src={back_arrow_icon} alt="" />
            <iframe width='90%' height='90%'
            src='https://youtube.com/embed/dQw4w9WgXcQ'
            title="trailer" frameborder='0' allowFullScreen></iframe>
            <div className="player-info">
                <p>{}Published date</p>
                <p>Name</p>
                <p>Type</p>
            </div>
        </div>
    )
}

export default Player