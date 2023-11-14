import Carousel from "react-multi-carousel";
import { responsiveGroup } from "./constants";
import { useRef } from "react";

const AppCarousel = ({children}) => {
    const carouselRef = useRef();

    const handleWheel = (event) => {
        if (carouselRef.current) {
          if (event.deltaX > 0) {
            carouselRef.current.next();
          } else {
            carouselRef.current.previous();
          }
        }
      };

    return (
        <div onWheel={handleWheel}>
            <Carousel 
        showDots={false} 
        responsive={responsiveGroup} 
        swipeable={true}
        draggable={true}
        ref={carouselRef}
        >
            {children}
        </Carousel>
        </div>
        
    );
  };
  
  export default AppCarousel;