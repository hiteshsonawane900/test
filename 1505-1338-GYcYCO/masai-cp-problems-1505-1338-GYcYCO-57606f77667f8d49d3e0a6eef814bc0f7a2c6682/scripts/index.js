// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT}`;
// ------------------ ^^^^^^^^^^^^^^ --------
// API URLS
const hotelAPI = `${baseServerURL}/hotels`; // make a fetch request on this api

const Fetch = async() =>{
  try{
  let ans = await fetch(hotelAPI) ;
  let data = await ans.json() ;
  console.log(data) ;
  // return data;
  display(data) ;
}catch(err){
  console.log(err) ;
}
}
Fetch()
function display(data){
  data.forEach((ele,i) => {
     var div = document.createElement("div") ;
    //  div.id = i+1 ;
     var name = document.createElement("p") ;
     name.textContent = ele.name ;
     
     var price = document.createElement("p") ;
     price.textContent = ele.price ;

     var image = document.createElement("img") ;
     image.setAttribute("src",ele.image) ;

     var city = document.createElement("p") ;
     city.textContent = ele.city ;

     div.append(image,name,city,price) ;
     document.getElementById("hotel-container").append(div) ;

  })
}