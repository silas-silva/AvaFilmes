import Stars from '../Stars';
import "./index.css"
import { Link } from 'react-router-dom'

function CardMovie(props) {

    const filme = {
        id: props.movie.id,
        image: props.filme.image,
        title: props.filme.title,
        numReviews: props.filme.numReviews,
        noteReview: props.filme.noteReview.toFixed(1) //To fixed limita as casas decimais
    }

    return (
        <>
            <div className="container">
                <div className="cardMovie">
                    <img src={filme.image} alt="" />
                    <h2>{filme.title}</h2>
                    <p>{filme.noteReview}</p>
                    <div>
                        <Stars avaliacoes={filme.noteReview} />
                    </div>
                    <span>{filme.numReviews}</span>
                    <Link className='linkAvaliar' to={`/form/${filme.id}`} > <button>Avaliar</button> </Link>
                </div>
            </div>
        </>
    )
};

export default CardMovie;