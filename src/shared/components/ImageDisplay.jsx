import React from "react";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ImageDisplay = ({ imageData }) => {
    return (
        <CarouselProvider infinite={true} naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={imageData.length} visibleSlides={1} isPlaying={true}>
            <Slider>
                {imageData.map((img, idx) => (
                    <Image index={idx} key={idx} src={img.url} />
                ))}
            </Slider>
        </CarouselProvider>
    );
};

export default ImageDisplay;
