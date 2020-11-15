import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  var [index, setIndex] = useState(0)
  var {name, job, image, text} = people[index]

  const checkNum = (num) => {
    if (num > people.length - 1) return 0
    if (num < 0)  return people.length - 1
    return num
  }

  var nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNum(newIndex)
    })
  }

  var prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }

  var randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length)
    if (randomNum === index) {
      randomNum = index + 1
    }
    setIndex(checkNum(randomNum))
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={() => randomPerson()}>
          surprise me
        </button>
    </article>

  )
};

export default Review;
