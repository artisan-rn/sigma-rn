import Carousel, {
  Pagination,
  ParallaxImage,
  getInputRangeFromIndexes,
} from 'react-native-snap-carousel';
//@ts-ignore
Carousel.Pagination = Pagination;
//@ts-ignore
Carousel.ParallaxImage = ParallaxImage;
//@ts-ignore
Carousel.getInputRangeFromIndexes = getInputRangeFromIndexes;

export default Carousel;
