//get list of quotes as props
//try to implement simple carousel to click through? could also be used for images maybe
//display no quotes available if needed

import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "@emotion/styled";

const dummyQuotes = [{ dialog: "abcd" }, { dialog: "efgh" }, { dialog: "ijkl" }];
//                {/* <div style={} key={idx}>{quote.dialog}</div> */}

const QuoteDisplay = ({ quoteData }) => {
    return (
        <CarouselProvider infinite={true} naturalSlideWidth={500} naturalSlideHeight={500} totalSlides={quoteData.length} visibleSlides={1} isPlaying={false}>
            <Slider>
                {quoteData.map((quote, idx) => (
                    <Slide index={idx} key={idx}>
                        <Div>Random Quote: {quote.dialog}</Div>
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

const Div = styled("div")((props) => ({
    fontSize: "15px",
}));
