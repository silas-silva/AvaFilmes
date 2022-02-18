import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Api from "../../services/Api.js";
import "./index.css"

function Form() {
  // Definition of variables 
  const [movie, setMovie] = useState("");
  const { movieID } = useParams();
  const [review, setReview] = useState(0)
  const [email, setEmail] = useState("")

  // Get Data
  let getData = async () => {
    let response = await Api.get(`movies/${movieID}`);
    setMovie(response.data[0])
    //In setMovie receive an object in format 
    //const filme = {
    //   id: "nome filme",
    //   image: "link com imagem do filme",
    //   title: "titulo do filme",
    //   numReviews: 3,
    //   noteReview: 3.5
    // }
  }

  //
  async function saveReview() {
    let save = await Api.post(`rate/${movieID}`, { email, review });
    setReview("")
    alert(save.data.info)
  }


 // Get input data fields
  function searchReview(e) {
    setReview(e.target.value)
  }

  function searchEmail(e) {
    setEmail(e.target.value)
  }

  // first action when executing
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className="container container-form">
        <div className="cardReview">
          <img src={movie.image} alt="" />
          <h2>{movie.title}</h2>
          <form>
            <span>Informe seu email</span>
            <input type="email" value={email} onChange={(e) => searchEmail(e)} />
            <span>Informe sua avaliação (0 a 5 são validos para a nota)</span>
            <input placeholder="0 a 5" type="number" max="5" min="0" step="0.1" value={review} onChange={(e) => searchReview(e)} />
          </form>
          <button onClick={saveReview}>Salvar</button>
          <button><Link to="/">Cancelar</Link></button>
        </div>
      </div>
    </>
  )
}

export default Form;
