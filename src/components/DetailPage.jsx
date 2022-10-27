import React from "react";
import { useGetQuotesByCharQuery } from "../shared/services/getChars";
import { useGetImage } from "../shared/services/getImage";
import { connect } from "react-redux";

const DetailPage = ({ detail }) => {
    const { data, error } = useGetImage(detail.name);
    //should not be navigable to until user has clicked a details button on search page
    //should get the char info (incl id) from whatever they clicked (saved in detail slice?)
    //should run 2 api queries
    //pull image from bing api w/ char.name
    //pull quotes from lotr api w/ char._id
    //display image, name, some more details from lotrapi (using detaildisplay component)

    return <div>DetailPage</div>;
};

const mapDispatchToProps = (dispatch) => {
    return;
};
const mapStateToProps = (state) => ({ detail: state.detail });

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
