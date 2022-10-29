import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetQuotesByCharQuery } from "../services/getChars";
import { useLazyGetImageByNameQuery } from "../services/getImage";
import DetailDisplay from "./DetailDisplay";

const OverviewDisplay = ({ char, setDetail }) => {
    let navigate = useNavigate();
    const gotoDetailPage = () => {
        navigate("/detail");
    };
    const [quoteTrigger, { data: quoteData, error: quoteError }] = useLazyGetQuotesByCharQuery();
    const [imageTrigger, { data: imageData, error: imageError }] = useLazyGetImageByNameQuery();

    const singleQuote = useMemo(() => {
        //need to account for no quotes somehow
        if (!!quoteData && quoteData.length > 0) {
            return quoteData[0].dialog;
        }
        return `No quotes available from ${char.name}`;
        // return !!quoteData ? quoteData[Math.floor(Math.random() * quoteData.length)].dialog : `No quotes available`;
    }, [quoteData]);

    return (
        <>
            <div>Name: {char.name}</div>
            <div>Race: {char.race}</div>
            <button
                id={char._id}
                onClick={
                    () => {
                        setDetail(char);
                        quoteTrigger(char._id);
                        imageTrigger(char.name);
                        // gotoDetailPage();
                        //possibly show DetailDisplay component here instead of navigating to separate page?
                        //
                    }
                    //nav to detail page
                }
            >
                details
            </button>
            {!!quoteData && !!imageData && <DetailDisplay quote={singleQuote} url={imageData[0].url} />}
            {/* {!!quoteData && !!imageData && <DetailDisplay quote={quoteData[0].dialog} url={imageData[0].url} />} */}
        </>
    );
};

export default OverviewDisplay;

//             _id: "5cd99d4bde30eff6ebccfc15",
//             height: "1.06m (3'6\")",
//             race: "Hobbit",
//             gender: "Male",
//             birth: "22 September ,TA 2968",
//             spouse: "",
//             death: "Unknown (Last sighting ,September 29 ,3021,) (,SR 1421,)",
//             realm: "",
//             hair: "Brown",
//             name: "Frodo Baggins",
//             wikiUrl: "http://lotr.wikia.com//wiki/Frodo_Baggins",
