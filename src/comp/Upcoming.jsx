import {useState, useEffect} from 'react'
import MovieItem from './MovieItem'

// import muv from '../muv.json'

function Upcoming() {
    const [ muv, setmuv] = useState([])

    useEffect(() => {
       fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
       .then(res => res.json())
       .then(data => {
          setmuv (data.results)
       })
      },[])

      return(
        <div className="upcoming">
           {
               muv.map(muv => (
                  <MovieItem data={muv} />
               ))
           }
        </div>
      )

}


export default Upcoming;