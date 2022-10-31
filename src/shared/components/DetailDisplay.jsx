//maybe render this component on search page (in overview display) instead of navigating to DetailPage

import React from "react";
import ImageDisplay from "./ImageDisplay";
import QuoteDisplay from "./QuoteDisplay";
import styled from "@emotion/styled";

const DetailDisplay = ({ quoteData, imageData }) => {
    return (
        <div>
            {(!quoteData || (!!quoteData && quoteData.length === 0)) && <Div>No quotes found.</Div>}
            {/* {!!quoteData && quoteData.length === 0 && <div>No quotes found.</div>} */}
            {!!quoteData && quoteData.length && <Div>Random quote: {quoteData[Math.floor(Math.random() * quoteData.length)].dialog}</Div>}
            {/* {!!quoteData && quoteData.length > 0 && <QuoteDisplay quoteData={quoteData} />} */}
            {/* {!!imageData && <ImageDisplay imageData={imageData} />} */}
            {!!imageData && <img width={"200px"} src={imageData[0].url} />}
        </div>
    );
};

export default DetailDisplay;

const Div = styled("div")((props) => ({
    fontSize: "15px",
}));
