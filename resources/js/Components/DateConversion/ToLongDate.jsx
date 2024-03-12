import React from "react";

const ToLongDate = ({ dateProp }) => {
    const converToDate = new Date(dateProp);

    return <>{converToDate.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    )}</>;
};

export default ToLongDate;
