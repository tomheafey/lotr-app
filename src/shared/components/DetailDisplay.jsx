import React from "react";
import styled from "@emotion/styled";
import "../css/DetailDisplay.css";

const DetailDisplay = ({ quote, imageData }) => {
    return (
        <div>
            <div className="image-container">{!!imageData && <Img width={"200px"} src={imageData[0].url} />}</div>
            {/* {(!quoteData || (!!quoteData && quoteData.length === 0)) && <Div>No quotes found.</Div>} */}
            {/* {!!quoteData && quoteData.length === 0 && <div>No quotes found.</div>} */}
            {quote && <Div>Random quote: "{quote}"</Div>}
            {!quote && <Div>No quotes found</Div>}
            {/* {!!quoteData && quoteData.length > 0 && <QuoteDisplay quoteData={quoteData} />} */}
            {/* {!!imageData && <ImageDisplay imageData={imageData} />} */}
        </div>
    );
};

export default DetailDisplay;

// dummy image: https://via.placeholder.com/500/000000/b0d5d5/?text=Loading%20Image...

const Div = styled("div")((props) => ({
    fontSize: "15px",
}));

const Img = styled("img")((props) => ({
    maxHeight: "500px",
}));
