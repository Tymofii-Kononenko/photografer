// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.css';
// import axios from 'axios';
// const revSlider = document.querySelector(".reviews-swiper-wrapper")
// let request
// async function createRevMarkup(fetchReq) {

//   const renderRev = fetchReq.map(({ author, avatar_url, review }) => `
   
//         <li class=" swiper-slide reviews-list-item">
//           <img
//             class="reviews-avatar"
//             src="${avatar_url}"
//             alt="avatar"
//           />
//           <div class="reviews-item-content">
//             <h3 class="reviews-item-title">${author}</h3>
//             <p class="reviews-item-text">
//               ${review}
//             </p>
    
//         </li>
//         `)

//   revSlider.innerHTML = `${renderRev.join(" ")}`
// }

// async function requestCheck() {
//   try {
//     request = (await axios.get("https://portfolio-js.b.goit.study/api/reviews")).data
//   } catch (error) {
//     iziToast.error({
//       message: `Sorry, a ${error} error occurred in reviews`,
//       position: "topRight",
//       color: "#ef4040",
//       messageColor: "#fafafb"
//     })
//     revSlider.innerHTML = `<p class="error-text">Not found</p>`;
//     return
//   }


//   createRevMarkup(request)
// }



// requestCheck()



// const swiper = new Swiper('.reviews-swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 16,
//   breakpoints: {
//     768: {
//       slidesPerView: 2
//     },
//     1440: {
//       slidesPerView: 4
//     }
//   },
//   watchOverflow: false,
//   loop: false,
//   direction: 'horizontal',
//   speed: 600,
//   navigation: {
//     nextEl: '.reviews-swiper-right',
//     prevEl: '.reviews-swiper-left',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
//   mousewheel: true,
// });

