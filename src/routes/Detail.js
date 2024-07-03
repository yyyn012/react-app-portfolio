import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await fetch(
      `https://yts.mx/api/v2/list_movies.json?movie_id=${id}`
    );
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}

// useParams()를 이용하면 React Router가 넘겨주는 변수의 값(파라미터 정보)을 받을 수 있다.

export default Detail;
