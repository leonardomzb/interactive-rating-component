const ratingArticleEle = document.querySelector('.js-rating-article');
const thankyouArticleEle = document.querySelector('.js-thankyou-article');
const formEle = document.querySelector('.main__form');

const ratingCountEle= document.querySelectorAll('.js-main__rating-count');
const selectedRatingEle = document.querySelector('.js-selected-rating');



ratingCountEle.forEach((ratingEle, index) => {
  ratingEle.addEventListener('click', () =>{
    selectedRatingEle.innerHTML = ratingEle.innerHTML;    
  });
});


formEle.addEventListener('submit', (e) => {    
  e.preventDefault();       
  ratingArticleEle.style.display = 'none';
  thankyouArticleEle.style.display = 'grid';  
});


