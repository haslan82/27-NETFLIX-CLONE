import axios from "axios";



// api den popüler filmleri alıp reducera aktaran bir asekron thunk fonksiyonu
export default axios.create({
    baseURL:"https://api.themoviedb.org/3",

//yapacağımız tüm isteklere eklenecek header
    headers: {
        accept: 'application/json',

        //yetkilendirmeBearer ${import.meta.VITE_API_KEY
        Authorization: ` Bearer ${import.meta.env.VITE_API_KEY} ` ,
      },
      params:{
        language:"tr-TR",
      }
} )