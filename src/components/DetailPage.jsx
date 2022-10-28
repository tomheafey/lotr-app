import React, { useMemo, useState } from "react";
import { useGetQuotesByCharQuery } from "../shared/services/getChars";
import { useGetImageByNameQuery } from "../shared/services/getImage";
import { connect, useSelector } from "react-redux";
import { clearDetail } from "../shared/redux/detailSlice";

const DetailPage = ({ detail }) => {
    const [skip, setSkip] = useState(true);
    const { data: quoteData, error: quoteError } = useGetQuotesByCharQuery(detail._id, { skip: skip });
    const randomQuote = useMemo(() => {
        return !!quoteData ? quoteData[Math.floor(Math.random() * quoteData.length)].dialog : "";
    }, [quoteData]);

    const { data: imageData, error: imageError } = useGetImageByNameQuery(detail.name, { skip: skip });

    //display image, name, some more details from lotrapi (using detaildisplay component)

    return (
        <>
            <button onClick={() => setSkip(false)}>trigger</button>
            {/* {console.log(quoteData)} */}
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

//quote data format
// {
//     "docs": [
//         {
//             "_id": "5cd96e05de30eff6ebcce80b",
//             "dialog": "Now come the days of the King. May they be blessed.",
//             "movie": "5cd95395de30eff6ebccde5d",
//             "character": "5cd99d4bde30eff6ebccfea0",
//             "id": "5cd96e05de30eff6ebcce80b"
//         },
//         {
//             "_id": "5cd96e05de30eff6ebcce82a",
//             "dialog": "Hobbits!",
//             "movie": "5cd95395de30eff6ebccde5d",
//             "character": "5cd99d4bde30eff6ebccfea0",
//             "id": "5cd96e05de30eff6ebcce82a"
//         },
//         {
//             "_id": "5cd96e05de30eff6ebcce832",
//             "dialog": "Be careful. Even in defeat, Saruman is dangerous.",
//             "movie": "5cd95395de30eff6ebccde5d",
//             "character": "5cd99d4bde30eff6ebccfea0",
//             "id": "5cd96e05de30eff6ebcce832"
//         },
