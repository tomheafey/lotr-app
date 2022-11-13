import React, { useState } from "react";
import { connect } from "react-redux";
import { setDetail } from "../shared/redux/detailSlice";
import { useLazyGetCharsByNameQuery, useLazyGetQuotesByCharQuery } from "../shared/services/getChars";
import { useLazyGetImageByNameQuery } from "../shared/services/getImage";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionSummary";
import DetailDisplay from "../shared/components/DetailDisplay";
import styled from "@emotion/styled";
import { FormContainer } from "../shared/styled/FormContainer";
import { Input } from "../shared/styled/Input";
import { Button } from "../shared/styled/Button";
import { AccordionContainer } from "../shared/styled/AccordionContainer";

const SearchPage = ({ setDetail }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // const { data, error, isLoading, isSuccess } = useGetCharsByNameQuery(query, { skip: skip });
    const [charsTrigger, { data: charsData, error: charsError }] = useLazyGetCharsByNameQuery();
    const [quoteTrigger, { data: quoteData, error: quoteError }] = useLazyGetQuotesByCharQuery();
    const [imageTrigger, { data: imageData, error: imageError, isFetching }] = useLazyGetImageByNameQuery();
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

    //TODO: (maybe) add indication that there were no search results
    //TODO: use regex? to allow searches for Éowyn, Théoden, etc
    //TODO: use isFetching to show dummy image until pic loads
    //TODO: set image height so stuff doesn't bounce around
    //TODO: indicate that it's a quote somehow
    return (
        <>
            <FormContainer>
                <div>
                    <label htmlFor="search">find characters</label>
                </div>
                <div>
                    <Input id="search" type="text" autoFocus value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div>
                    <Button
                        disabled={searchTerm.length < 3}
                        onClick={async (e) => {
                            e.preventDefault();
                            await charsTrigger(searchTerm, true); //true=preferCacheValue
                        }}
                    >
                        Search
                    </Button>
                </div>
            </FormContainer>
            {!!charsError && "there was an error"}
            <AccordionContainer>
                {!!charsData &&
                    charsData.map((char) => (
                        <Accordion
                            onClick={async () => {
                                handleExpand(char.id);
                                await imageTrigger(char.name);
                                await quoteTrigger(char.id);
                            }}
                            expanded={isExpanded === char.id}
                            key={char.id}
                        >
                            <AccordionSummary>{char.name}</AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <Div>Race: {char.race}</Div>
                                    <Div>Birth: {char.birth}</Div>
                                    <Div>Death: {char.death}</Div>
                                    <DetailDisplay quoteData={quoteData} imageData={imageData} />
                                </div>
                                {/* <div>Race: {char.race}</div>
                            <div>Birth: {char.birth}</div>
                            <div>Death: {char.death}</div> */}
                                {/* {!!quoteData && quoteData.length > 0 && quoteData[0].dialog} */}
                            </AccordionDetails>
                        </Accordion>
                    ))}
            </AccordionContainer>

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

const Div = styled("div")((props) => ({
    fontSize: "20px",
}));
