
const inn = document.querySelector('#input1');
const butt = document.querySelector('#button1');
const galleryContent  = document.querySelector('.galleryContent');
let url = `https://api.unsplash.com/search/photos?query=spring&client_id=uzSdSY8wZC1EyB69bgI6kq30ZokUtw9y_MpsHRVTmGc`;
async function getData() {
    const res = await fetch(url);
    let data = await res.json();
    showData(data);
    console.log(url)
  }
  getData();
  async function showData(data) {  
    
     for (let i = 0; i < 9; i++) {
        const img = document.createElement('div');
        img.style.backgroundImage=`url(${data.results[i].urls.regular})`;
        img.classList.add('gallery-img')
        galleryContent.append(img);
      }
     
  }
  async function searchResult() {
    deleteResult();
     let c = inn.value;
     url = `https://api.unsplash.com/search/photos?query=${c}&client_id=uzSdSY8wZC1EyB69bgI6kq30ZokUtw9y_MpsHRVTmGc`;
     getData();

  }
 async  function deleteResult() {
     for (let i = 0; i<9;i++) {
        let di = document.querySelector('.gallery-img');
        di.remove();
     }
   
 }

 
 butt.addEventListener('click',searchResult)



 


   function changeImage() {
    
        inn.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
               searchResult();
            }
        });
  
    }

 inn.addEventListener('focus',changeImage);
