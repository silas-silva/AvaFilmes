import CardMovie from "../../components/CardMovie";
import { ReactComponent as ArrowLit } from '../../assets/img/arrowLit.svg';
import { ReactComponent as ArrowOff } from '../../assets/img/arrowOff.svg';
import Api from "../../services/Api.js";
import "./index.css"
import { useState, useEffect } from "react";

function List() {
    const [datas, setDatas] = useState(false);
    const [numPages, setNumPages] = useState(datas.numPages);
    const [page, setPage] = useState(1);

    let getData = async (page) => {
        let response = await Api.get(`movies/page/${page}`);
        setNumPages(response.data.numPages);
        setDatas(response.data);
    }

    // When the varible page change, called the function
    useEffect(() => {
        getData(page);
    }, [page])

    let listMovies = "Não tem Filmes Disponiveis"

    if (datas != false) {
        listMovies = datas.movies?.map( (movie, key) => <div key={key}><CardMovie movie={movie} /></div> )
    }

    return (
        <>
            <div className="next-preview-page container">
                <div>
                    <a className="spin-arrow" onClick={() => setPage(page > 1 ? page - 1 : page)}> {page > 1 ? <ArrowLit /> : <ArrowOff className="arrowDisable" />} </a>
                    <span> {page == undefined ? 1 : page} de {numPages} </span>
                    <a onClick={() => setPage(page < numPages ? page + 1 : page)} >{page < numPages ? <ArrowLit /> : <ArrowOff className="arrowDisable" />}</a>
                </div>
            </div>
            <div className="cards-movies container">
                {listMovies}
            </div>
        </>
    )

}
export default List;
