import React from "react";

const PostDate = ({ date }) => {
    return (
        new Date().toLocaleString("hr-HR",{
            day: "numeric",
            month: "long",
            year: "numeric",
        })
    );
}

export default PostDate;