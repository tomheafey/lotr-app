import React, { useMemo, useState } from "react";
import { connect, useSelector } from "react-redux";
import { clearDetail } from "../shared/redux/detailSlice";
import { useLazyGetQuotesByCharQuery } from "../shared/services/getChars";
import { useLazyGetImageByNameQuery } from "../shared/services/getImage";

const DetailPage = ({ detail }) => {
    //need to fix this so that data is still displayed when navigating between this page and searchpage?
    //need to account for no dialog (possibly no picture) for bit characters
    //for now, displaying img & quote with button, need to display upon mount later

    const [quoteTrigger, { data: quoteData, error: quoteError }] = useLazyGetQuotesByCharQuery();
    const [imageTrigger, { data: imageData, error: imageError }] = useLazyGetImageByNameQuery();

    const randomQuote = useMemo(() => {
        //need to account for no quotes somehow
        if (!!quoteData && quoteData.length > 0) {
            return quoteData[Math.floor(Math.random() * quoteData.length)].dialog;
        }
        return `No quotes available from ${!!detail ? detail.name : null}`;
        // return !!quoteData ? quoteData[Math.floor(Math.random() * quoteData.length)].dialog : `No quotes available`;
    }, [quoteData]);

    //display image, name, some more details from lotrapi (using detaildisplay component)

    return (
        <>
            <button
                onClick={async () => {
                    await quoteTrigger(detail._id);
                    await imageTrigger(detail.name);
                }}
            >
                trigger
            </button>
            {!!quoteData && <div>{randomQuote}</div>}
            {!!quoteError && <div>{quoteError}</div>}
            {!!imageData && <img width={"200px"} src={imageData[0].url} />}
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearDetail: () => dispatch(clearDetail()),
    };
};
const mapStateToProps = (state) => ({ detail: state.detail });

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
