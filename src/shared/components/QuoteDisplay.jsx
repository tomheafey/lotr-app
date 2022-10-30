//get list of quotes as props
//try to implement simple carousel to click through? could also be used for images maybe
//display no quotes available if needed

import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const dummyQuotes = [{ dialog: "abcd" }, { dialog: "efgh" }, { dialog: "ijkl" }];
//                {/* <div style={} key={idx}>{quote.dialog}</div> */}

const QuoteDisplay = ({ quoteData }) => {
    return (
        <CarouselProvider infinite={true} naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={quoteData.length} visibleSlides={1} isPlaying={true}>
            <Slider>
                {quoteData.map((quote, idx) => (
                    <Slide index={idx} key={idx}>
                        {quote.dialog}
                    </Slide>
                ))}
            </Slider>
            {/* <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext> */}
            {/* <DotGroup></DotGroup> */}
        </CarouselProvider>
    );
};

export default QuoteDisplay;
