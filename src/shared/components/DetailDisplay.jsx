//maybe render this component on search page (in overview display) instead of navigating to DetailPage

import React from "react";

const DetailDisplay = ({ quote, url }) => {
    return (
        <>
            <div>{quote}</div>
            <img width={"200px"} src={url} />
        </>
    );
};

export default DetailDisplay;
