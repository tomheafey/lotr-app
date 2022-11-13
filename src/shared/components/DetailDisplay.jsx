import React from "react";
import styled from "@emotion/styled";
import "../css/DetailDisplay.css";

const DetailDisplay = ({ quote, imageURL }) => {
    return (
        <div>
            {/* <div className="image-container">{!!imageData && <Img width={"200px"} src={imageData[0].url} />}</div> */}
            <Img src={imageURL} />
            {quote && <Div>Random quote: "{quote}"</Div>}
            {!quote && <Div>No quotes found</Div>}
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
