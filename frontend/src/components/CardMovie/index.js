import Stars from '../Stars';
import "./index.css"
import { Link } from 'react-router-dom'

function CardMovie(props) {

    const movie = {
        id: props.movie.id,
        image: props.movie.image,
        title: props.movie.title,
        numReviews: props.movie.numReviews,
        noteReview: props.movie.noteReview.toFixed(1) //To fixed limita as casas decimais
    }
    return (
        <> 
            <div className="container">
                <div className="cardMovie">
                    <img src={movie.image} alt="" />
                    <h2>{movie.title}</h2>
                    <p>{movie.noteReview}</p>
                    <div>
                        <Stars reviews={movie.noteReview} />
                    </div>
                    <span>{movie.numReviews}</span>
                    <Link className='link' to={`/form/${movie.id}`} > <button>Avaliar</button> </Link>
                </div>
            </div>
        </>
    )
};

export default CardMovie;