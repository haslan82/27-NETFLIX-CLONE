import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { applyMiddleware } from "redux";


const DetailPage = () => {

  // url den filmin id sini useParams ile aldık
  const {id} = useParams();
  //console.log(id);

useEffect(()=>{
applyMiddleware.get(`movie/${id} `)
}, [])


  return (
    <div>
      detay sayfası
    </div>
  )
}

export default DetailPage
