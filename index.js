
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const galleryContent  = document.querySelector('.galleryContent');
const baseUrl =  `https://api.unsplash.com/search/photos`;
let url = `https://api.unsplash.com/search/photos?query=spring&client_id=uzSdSY8wZC1EyB69bgI6kq30ZokUtw9y_MpsHRVTmGc`;
async function getData(request) {
    const res = await fetch(`${baseUrl}?query=${request}&client_id=uzSdSY8wZC1EyB69bgI6kq30ZokUtw9y_MpsHRVTmGc`);
    const data = await res.json();
    showData(data);
    //console.log(query);
  }
  getData('spring');
   function showData(data) {  
     for (let i = 0; i < 9; i++) {
        const img = document.createElement('div');
        img.style.backgroundImage=`url(${data.results[i].urls.regular})`;
        img.classList.add('gallery-img')
        galleryContent.append(img);
      }
     
  }
function searchResult() {
    deleteResult();
    request = searchInput.value;
     //query = searchInput.value;
    //url = `https://api.unsplash.com/search/photos?query=${request}&client_id=uzSdSY8wZC1EyB69bgI6kq30ZokUtw9y_MpsHRVTmGc`;
     getData(request);

  }
 function deleteResult() {
     document.querySelectorAll('.gallery-img').forEach((el)=> el.remove());
   
 }

 
searchButton.addEventListener('click',searchResult);
  function changeImage() {
    
        searchInput.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
               searchResult();
            }
        });
  
    }
 
 searchInput.addEventListener('keydown',changeImage);
