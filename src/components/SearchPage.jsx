import React, { useMemo, useState } from "react";
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
    const placeholderURL = "https://via.placeholder.com/500/000000/b0d5d5/?text=Loading%20Image...";
    const [searchTerm, setSearchTerm] = useState("");

    const [charsTrigger, { data: charsData, error: charsError }] = useLazyGetCharsByNameQuery();
    const [quoteTrigger, { data: quoteData, error: quoteError }] = useLazyGetQuotesByCharQuery();
    const [imageTrigger, { data: imageData, error: imageError, isFetching }] = useLazyGetImageByNameQuery();

    const [isExpanded, setIsExpanded] = useState(null);
    const handleExpand = (expandedAccordion) => {
        if (isExpanded === expandedAccordion) {
            setIsExpanded(null);
        } else {
            setIsExpanded(expandedAccordion);
        }
    };
    const randomQuote = useMemo(() => {
        if (quoteData && quoteData.length > 0) {
            return quoteData[Math.floor(Math.random() * quoteData.length)].dialog;
        }
    }, [quoteData]);

    const imageURL = useMemo(() => {
        if (imageData && imageData.length > 0) return imageData[0].url;
        return "https://via.placeholder.com/500/000000/b0d5d5/?text=Loading%20Image...";
    }, [imageData]);

    const characterClick = async (id, name) => {
        handleExpand(id);
        await imageTrigger(name);
        await quoteTrigger(id);
    };

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
            {charsError && "there was an error"}
            <AccordionContainer>
                {charsData &&
                    charsData.map((char) => (
                        <Accordion
                            onClick={async () => {
                                await characterClick(char.id, char.name);
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
                                    {isFetching && <DetailDisplay quote={randomQuote} imageURL={placeholderURL} />}
                                    {!isFetching && <DetailDisplay quote={randomQuote} imageURL={imageURL} />}
                                </div>
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
