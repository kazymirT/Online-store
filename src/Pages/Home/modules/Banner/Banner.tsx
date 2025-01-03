import { BANNER_DATA } from './data';
import Slide from './Slide/Slide';
import Slider from '@/components/Slider/Slider';

const Banner = () => {
  return (
    <Slider
      arrows
      sliderCL="banner"
      variant="banner"
      initialSlide={1}
      slidesToScroll={1}
      slidesToShow={1}
      dots
    >
      {BANNER_DATA.map((banner) => (
        <Slide slide={banner} key={banner.id} />
      ))}
    </Slider>
  );
};

export default Banner;
