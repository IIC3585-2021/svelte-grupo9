import axios from "axios";

const accessKey = "oATOAhYStQlB8L6si3nuwRqscwn6v-bMRtgRZizy7q4";

const apiEndpoint = "https://api.unsplash.com/";
const randomPhotoEndpoint = `${apiEndpoint}photos/random/`;
const photoByIdEndpoint = `${apiEndpoint}photos/`;
const photoBySearchEndpoint = `${apiEndpoint}search/photos/`;

export const getRandomPhoto = async param => {
  try {
    const res = await axios.get(randomPhotoEndpoint, {
      params: {
        client_id: accessKey,
        count: 10,
        ...param
      }
    });
    if (res.status == 200) return res.data;
    else return null;
  } catch (exc) {
    console.error(exc);
    return null;
  }
};

export const getPhotoById = async (param, photoId) => {

    try {
        const res = await axios.get(photoByIdEndpoint + photoId, {
          params: {
            client_id: accessKey,
            count: 1,
            ...param
          }
        })
    
        if (res.status == 200){
            //console.log(res.data)
             return res.data
            }
            else return null
            
      } catch (exc) {
        console.error(exc);
        return null;
      }

}

export const getPhotosByCountry = async (param, country) => {
  try {
    console.log(country);
      const res = await axios.get(photoBySearchEndpoint, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '1',
        },
        params: {
          client_id: accessKey,
          query: country,
          page: Math.floor((Math.random() * 10) + 1),
          ...param
        }
      })
  
      if (res.status == 200){
           return res.data['results']
          }
          else return null
          
    } catch (exc) {
      console.error(exc);
      return null;
    }

}