//maybe render this component on search page (in overview display) instead of navigating to DetailPage

import React from "react";
import QuoteDisplay from "./QuoteDisplay";

const DetailDisplay = ({ quoteData, url }) => {
    return (
        <>
            {quoteData.length === 0 && <div>no quotes</div>}
            {quoteData.length > 0 && <QuoteDisplay quoteData={quoteData} />}
            <img width={"200px"} src={url} />
        </>
    );
};

export default DetailDisplay;
