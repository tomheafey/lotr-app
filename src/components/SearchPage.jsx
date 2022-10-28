import React, { useState } from "react";
import { connect } from "react-redux";
import OverviewDisplay from "../shared/components/OverviewDisplay";
import { setDetail } from "../shared/redux/detailSlice";
import { useGetCharsByNameQuery, useGetQuotesByCharQuery, useLazyGetCharsByNameQuery, useLazyGetQuotesByCharQuery } from "../shared/services/getChars";
import { useLazyGetImageByNameQuery } from "../shared/services/getImage";

const SearchPage = ({ setDetail }) => {
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
            <label>lookup by name</label>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button
                onClick={async () => {
                    await charsTrigger(searchTerm, true); //true=preferCacheValue
                }}
            >
                search
            </button>

            {!!charsError && "there was an error"}
            {/* <div>{!!data && data.docs[0].name}</div> */}
            <div>{!!charsData && charsData.docs.map((char) => <OverviewDisplay key={char._id} char={char} setDetail={setDetail} />)}</div>
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

//getcharsbyname format:
// {
//     docs: [
//         {
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
//         },
//         {
//             _id: "5cd99d4bde30eff6ebccfd0a",
//             height: "",
//             race: "Hobbit",
//             gender: "Male",
//             birth: "FO 2",
//             spouse: "Unnamed wife",
//             death: "FO",
//             realm: "",
//             hair: "",
//             name: "Frodo Gardner",
//             wikiUrl: "http://lotr.wikia.com//wiki/Frodo_Gardner",
//         },
//     ],
//     total: 2,
//     limit: 1000,
//     offset: 0,
//     page: 1,
//     pages: 1,
// };
