import React, { useEffect, useState, useRef, forwardRef } from 'react';
import styled from 'styled-components';

import prev from 'assets/icons/arrow-prev.svg';
import next from 'assets/icons/arrow-next.svg';

const Container = styled.div`
  position: relative;
  width: calc(290px * 4);
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  transform: translateY(50px);
  opacity: 0;
`;

const SliderContainer = styled.div`
  width: 290px;
  height: 290px;
  display: flex;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.direction === 'prev' && '1%'};
  right: ${(props) => props.direction === 'next' && '1%'};
  z-index: 200;

  img {
    width: 25%;
    height: 25%;
  }
`;

const Btn = ({ direction, onClick, img }) => {
  return (
    <Button onClick={onClick} direction={direction}>
      <img src={img} />
    </Button>
  );
};

const Carousel = forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const { arr } = props;
  const slides = 4; // For total 8 images

  const handleNext = () => {
    if (currentSlide >= slides) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container ref={ref}>
      <SliderContainer ref={slideRef}>
        {arr.map((img, i) => (
          <img src={img} key={i} alt="something" />
        ))}
      </SliderContainer>
      <Btn direction="prev" onClick={handlePrev} img={prev} />
      <Btn direction="next" onClick={handleNext} img={next} />
    </Container>
  );
});

export default Carousel;