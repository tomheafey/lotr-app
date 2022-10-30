import React, { useState } from "react";
import { connect } from "react-redux";
import OverviewDisplay from "../shared/components/OverviewDisplay";
import QuoteDisplay from "../shared/components/QuoteDisplay";
import { setDetail } from "../shared/redux/detailSlice";
import { useGetCharsByNameQuery, useGetQuotesByCharQuery, useLazyGetCharsByNameQuery, useLazyGetQuotesByCharQuery } from "../shared/services/getChars";
import { useLazyGetImageByNameQuery } from "../shared/services/getImage";
import "../shared/css/Inputs.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import DetailDisplay from "../shared/components/DetailDisplay";

const SearchPage = ({ setDetail }) => {
    //? might be ambitious - possibly use accordion (mat ui) for this?

    const [searchTerm, setSearchTerm] = useState("");

    // const { data, error, isLoading, isSuccess } = useGetCharsByNameQuery(query, { skip: skip });
    const [charsTrigger, { data: charsData, error: charsError }] = useLazyGetCharsByNameQuery();
    const [quoteTrigger, { data: quoteData, error: quoteError }] = useLazyGetQuotesByCharQuery();
    const [imageTrigger, { data: imageData, error: imageError }] = useLazyGetImageByNameQuery();
    //trigger is async
    //429 error: too many requests
    const [isExpanded, setIsExpanded] = useState(null);
    const handleExpand = (expandedAccordion) => {
        if (isExpanded === expandedAccordion) {
            setIsExpanded(null);
        } else {
            setIsExpanded(expandedAccordion);
        }
    };

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

            {!!charsData &&
                charsData.map((char) => (
                    <Accordion
                        onClick={() => handleExpand(char.id)}
                        expanded={isExpanded === char.id}
                        key={char.id}
                        onChange={async () => {
                            if (isExpanded === char.id) {
                                await imageTrigger(char.name);
                                await quoteTrigger(char.id);
                            }
                        }}
                    >
                        <AccordionSummary>{char.name}</AccordionSummary>
                        <AccordionDetails>
                            {!!quoteData && !!imageData && <DetailDisplay quoteData={quoteData} imageData={imageData} />}
                            <DetailDisplay />
                            {/* <div>Race: {char.race}</div>
                            <div>Birth: {char.birth}</div>
                            <div>Death: {char.death}</div> */}
                            {/* {!!quoteData && quoteData.length > 0 && quoteData[0].dialog} */}
                        </AccordionDetails>
                    </Accordion>
                ))}

            {/* <div className="results-container">{!!charsData && charsData.map((char) => <OverviewDisplay key={char.id} char={char} setDetail={setDetail} />)}</div> */}
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
