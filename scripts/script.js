const ratingArticle = document.querySelector('.js-rating-article');
const thankyouArticle = document.querySelector('.js-thankyou-article');
const submitButtons = document.querySelector('.js-submit-button');

const ratingButtons = document.querySelectorAll('.js-rating-button');
const selectedRating = document.querySelector('.js-selected-rating');


ratingButtons.forEach((buttonElement, index) => {

  buttonElement.addEventListener('click', () =>{
    
    //calling the function to change the rating button style
    changeRatingButtoncolor(index);
    
    selectedRating.innerHTML = buttonElement.innerHTML;

    submitButtons.addEventListener('click', () => {              
        ratingArticle.style.display = 'none';
        thankyouArticle.style.display = 'grid';  
    });
    
  });

});


//function to change the rating button style
function changeRatingButtoncolor(presedButtonIndex){
  ratingButtons.forEach((buttonElement, index) => {
    if(index === presedButtonIndex){
      buttonElement.classList.remove('rating-button-normal');
      buttonElement.classList.add('rating-button-selected');
    }else{
      buttonElement.classList.remove('rating-button-selected');
      buttonElement.classList.add('rating-button-normal');
    }
  });
}


