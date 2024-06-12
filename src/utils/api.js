import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",

//yapacağımız tüm isteklere eklenecek header
    headers: {
        accept: 'application/json',

        //yetkilendirme
        Authorization: ` Bearer ${import.meta.VITE_API_KEY} ` ,
      },
      params:{
        language:"tr-TR",
      }
} )