import styled from "@emotion/styled";

export const Button = styled("button")((props) => ({
    marginTop: "10px",
    borderWidth: "2px",
    backgroundColor: "black",
    borderColor: "#b0d5d5",
    borderRadius: "10%",
    "&:hover": {
        borderColor: "white",
        color: "white",
        cursor: "pointer",
    },
    "&:disabled": {
        color: "darkgray",
        borderColor: "darkgray",
    },
}));
