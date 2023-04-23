import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import {reviews} from './data';

function Reviews() {

     const [index, setIndex] = useState(0);
     const {name,job,image,text} = reviews[index];

     console.log(index);

     const checkNumber = (number) => {
          if(number > reviews.length -1 ){
               return 0;
          }
          if(number < 0){
               return reviews.length - 1
          }
          return number;
     }

     const nextSlide = () => {
         setIndex((index) => {
              let newIndex = index + 1;
              return checkNumber(newIndex)
         }) 
     }

     const prevSlide = () => {
          setIndex((index) => {
               let newIndex = index - 1;
               return checkNumber(newIndex)
          }) 
      }


      const randomPerson = () => {
           let randomNumber = Math.floor( Math.random() * reviews.length)
           if(randomNumber === index){
                randomNumber = index + 1
           }
           setIndex(checkNumber(randomNumber))
      }

     return (
          <div className="reviews">
               <div className="review-img">
                    <img src={image} alt="" />
               </div>
               <h4 className="author">
                   {name}
               </h4>
               <p className="job">{job}</p>
               <div className="info">{text}</div>
               <div className="review-button">
                    <button onClick={nextSlide}><FaChevronRight /></button>
                    <button onClick={prevSlide}><FaChevronLeft /></button>
               </div>
               <button className="random-btn" onClick={randomPerson}>رندم</button>
          </div>
     )
}

export default Reviews
