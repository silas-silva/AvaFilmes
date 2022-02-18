import { ReactComponent as StarFull } from '../../assets/img/fullStar.svg';
import { ReactComponent as StarHalf } from '../../assets/img/halfStar.svg';
import { ReactComponent as StarEmpty } from '../../assets/img/emptyStar.svg';

import "./index.css"

//function for put the stars in array
function setStars(reviews, starArray){
    if(reviews === 1 || reviews > 1){
        starArray.push(<StarFull/>)
    }
    else if(reviews > 0 && reviews < 1){
        starArray.push(<StarHalf/>)
    }
    else if(reviews === 0){
        starArray.push(<StarEmpty/>)
    }
    return starArray
}

function Stars(props) {
    let reviews = props.avaliacoes;
    let starArray = [];
    
    for(let i = 0; i < 5; i++){
        //att array for import stars.
        starArray = setStars(reviews ,starArray);
        reviews = reviews - 1;
        if(reviews < 0){
            reviews = 0;
        }
    }

    return (
        <>
            <div className='img-star'>
                {starArray[0]}
                {starArray[1]}
                {starArray[2]}
                {starArray[3]}
                {starArray[4]}
            </div>
        </>
    )
};

export default Stars;