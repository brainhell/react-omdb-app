import React from 'react'
import PropTypes from 'prop-types'

const Card = ({movie}) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-8">
            <div className="bg-white">
                <img className="w-full h-auto" src={movie.Poster} alt={movie.Title}/>                      
                <div className="text-gray-8oo p-3">
                    <span className="text-xl">{movie.Title} {movie.Year}</span>
                    <p className="font-bold">{movie.Type}</p>
                </div>
                
            </div>
        </div>
        
                    
            
            
            
            
       
        
    )
}

Card.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Type: PropTypes.string,
    }).isRequired
};
export default Card