import React from "react";
import styled from "@emotion/styled";

const DetailDisplay = ({ quote, imageURL }) => {
    return (
        <div>
            {/* <div className="image-container">{!!imageData && <Img width={"200px"} src={imageData[0].url} />}</div> */}
            <ImageContainer>
                <Img src={imageURL} />
            </ImageContainer>
            {quote && <Div>Random quote: "{quote}"</Div>}
            {!quote && <Div>No quotes found</Div>}
        </div>
    );
};

export default DetailDisplay;

const Div = styled("div")((props) => ({
    fontSize: "15px",
}));

const Img = styled("img")((props) => ({
    maxWidth: "100%",
    objectFit: "contain",
}));

const ImageContainer = styled("div")((props) => ({
    border: "1px solid #b0d5d5",
    height: "250px",
    width: "200px",
    "@media (min-width: 600px)": {
        height: "500px",
        width: "400px",
    },
    "@media (min-width: 900px)": {
        height: "700px",
        width: "560px",
    },
    display: "flex",
    justifyContent: "center",
}));
