//maybe render this component on search page (in overview display) instead of navigating to DetailPage

import React from "react";
import ImageDisplay from "./ImageDisplay";
import QuoteDisplay from "./QuoteDisplay";

const DetailDisplay = ({ quoteData, imageData }) => {
    return (
        <>
            {quoteData.length === 0 && <div>no quotes</div>}
            {quoteData.length > 0 && <QuoteDisplay quoteData={quoteData} />}
            {!!imageData && <ImageDisplay imageData={imageData} />}
            {/* <img width={"200px"} src={url} /> */}
        </>
    );
};

export default DetailDisplay;
