import { FaChevronLeft, FaChevronRight, FaRegCircle, FaCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './Carousel.css';

/**
 * Carousel cycles through images automatically and allows users to browse manually.
 * @param {Array} images represents an array of objects. Each object will contain an image URL and alt text.
 */
export default function Carousel ({images}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      (current + 1 < images.length) ?
        setCurrent(current + 1) :
        setCurrent(0)
    }, 3000)
    return () => clearInterval(intervalId);
  }, [current, images]);

  return (
    <div className="Carousel-flex-column">
      <div className="Carousel-top-row">
        <FaChevronLeft className="chevrons"
        onClick={() => setCurrent(((current - 1) + images.length) % images.length)}/>
        <div className="Carousel-center">
          <img className="images" src={images[current].url} alt={images[current].alt} />
        </div>
        <FaChevronRight className="chevrons"
          onClick={() => setCurrent(((current + 1) % images.length))} />
      </div>
      <div className="Carousel-flex-column">
        <figcaption>{images[current].alt}</figcaption>
        <div>
          {images.map((image, index) => {
            return (
              <ProgressDot key={index}
                isCurrent={current === index}
                onClick={() => setCurrent(index)}
              />)
          })}
        </div>
      </div>
    </div>
  )
}

/**
 * ProgressDot generates a dot that will follow the carousel cycle and fill the dot that corresponds to the current image index.
 * @param {Boolean} isCurrent is a boolean that represents whether the current dot corresponds to the current image index.
 * @param {Function} onClick is a function that sets the current image to the index of the clicked dot.
 */
function ProgressDot({ isCurrent, onClick }) {
  return (
    <>
      {isCurrent ?
      <FaCircle onClick={onClick} className="dot" /> :
      <FaRegCircle onClick={onClick} className="dot" />}
    </>
  )
}
