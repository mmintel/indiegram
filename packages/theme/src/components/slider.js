import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { mdiArrowRightDropCircle, mdiArrowLeftDropCircle } from '@mdi/js';
import Icon from '@mdi/react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  Img,
} from '@mmintel/indiegram';

const StyledSlider = styled.div`
  position: relative;
`;

const SliderNavigator = styled.div`
  position: absolute;
  top: 50%;
  z-index: 10;
  fill: rgba(255,2555,255,0.5);
  cursor: pointer;
  transform: translateY(-50%);

  ${(props) => props.position === 'left' && css`
    left: 0.5rem;
  `}

  ${(props) => props.position === 'right' && css`
    right: 0.5rem;
  `}
`;

const Slider = ({ items }) => {
  const [swiper, updateSwiper] = React.useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <StyledSlider>
      <Swiper getSwiper={updateSwiper} loop keyboard={{ enabled: true }}>
        { items.map((media) => (
          <Img key={media.id} src={`${media.url}?w=1080&h=1080&fit=crop`} alt="" />
        ))}
      </Swiper>
      <SliderNavigator position="left">
        <Icon path={mdiArrowLeftDropCircle} size={0.75} onClick={goPrev} />
      </SliderNavigator>
      <SliderNavigator position="right">
        <Icon path={mdiArrowRightDropCircle} size={0.75} onClick={goNext} />
      </SliderNavigator>
    </StyledSlider>
  );
};

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default Slider;
