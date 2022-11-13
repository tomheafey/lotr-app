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
    border: "1px solid #b0d5d5",
    borderRadius: "5%",
    maxWidth: "100%",
    objectFit: "contain",
}));

const ImageContainer = styled("div")((props) => ({
    width: "250px",
    "@media (min-width: 600px)": {
        width: "450px",
    },
    "@media (min-width: 900px)": {
        width: "700px",
    },
    display: "flex",
    justifyContent: "center",
}));
