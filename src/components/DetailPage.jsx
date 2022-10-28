import React from "react";
import { useGetQuotesByCharQuery } from "../shared/services/getChars";
import { useGetImageByNameQuery } from "../shared/services/getImage";
import { connect } from "react-redux";
import { clearDetail } from "../shared/redux/detailSlice";

const DetailPage = ({ detail }) => {
    let skip = true;
    const { lotrData, lotrError } = useGetQuotesByCharQuery(detail._id, { skip: skip });
    const { imageData, imageError } = useGetImageByNameQuery(detail.name, { skip: skip });
    //can rename data(s) to data: lotrData, bingData

    //should not be navigable to until user has clicked a details button on search page
    //should get the char info (incl id) from whatever they clicked (saved in detail slice?)
    //should run 2 api queries
    //pull image from bing api w/ char.name
    //pull quotes from lotr api w/ char._id
    //display image, name, some more details from lotrapi (using detaildisplay component)

    return <button onClick={() => (skip = false)}>trigger</button>;
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearDetail: () => dispatch(clearDetail()),
    };
};
const mapStateToProps = (state) => ({ detail: state.detail });

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
