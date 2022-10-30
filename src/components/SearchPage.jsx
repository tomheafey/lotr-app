import React, { useState } from "react";
import { connect } from "react-redux";
import OverviewDisplay from "../shared/components/OverviewDisplay";
import QuoteDisplay from "../shared/components/QuoteDisplay";
import { setDetail } from "../shared/redux/detailSlice";
import { useGetCharsByNameQuery, useGetQuotesByCharQuery, useLazyGetCharsByNameQuery, useLazyGetQuotesByCharQuery } from "../shared/services/getChars";
import { useLazyGetImageByNameQuery } from "../shared/services/getImage";
import "../shared/css/Inputs.css";

const SearchPage = ({ setDetail }) => {
    //? might be ambitious - possibly use accordion (mat ui) for this?

    //need to fix this so that data is still displayed when navigating between this page and detailpage
    const [searchTerm, setSearchTerm] = useState("");

    // const { data, error, isLoading, isSuccess } = useGetCharsByNameQuery(query, { skip: skip });
    const [charsTrigger, { data: charsData, error: charsError }] = useLazyGetCharsByNameQuery();
    // const [quoteTrigger, { data: quoteData, error: quoteError }] = useLazyGetQuotesByCharQuery();
    // const [imageTrigger, { data: imageData, error: imageError }] = useLazyGetImageByNameQuery();

    //trigger is async
    //429 error: too many requests

    return (
        <>
            <div className="input-container">
                <div>
                    <label htmlFor="search">find characters</label>
                </div>
                <div>
                    <input id="search" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div>
                    <button
                        onClick={async () => {
                            await charsTrigger(searchTerm, true); //true=preferCacheValue
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            {!!charsError && "there was an error"}
            {/* <div>{!!data && data.docs[0].name}</div> */}
            <div>{!!charsData && charsData.map((char) => <OverviewDisplay key={char.id} char={char} setDetail={setDetail} />)}</div>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDetail: (char) => dispatch(setDetail(char)),
    };
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
