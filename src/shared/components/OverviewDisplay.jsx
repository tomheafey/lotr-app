import React from "react";
import { useNavigate } from "react-router-dom";

const OverviewDisplay = ({ char, setDetail }) => {
    let navigate = useNavigate();
    const gotoDetailPage = () => {
        navigate("/detail");
    };

    return (
        <>
            <div>Name: {char.name}</div>
            <div>Race: {char.race}</div>
            <button
                id={char._id}
                onClick={
                    () => {
                        setDetail(char);
                        gotoDetailPage();
                    }
                    //nav to detail page
                }
            >
                details
            </button>
            {/* onclick=> pass info to detail display/page? */}
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
