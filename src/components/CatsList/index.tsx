import React, { useState } from "react"
import ListItem from "./ListItem"
import useCats from "./useCats";
import "./styles.css"

const CatsList = (): JSX.Element => {
    const { catsData } = useCats();

    return <div className="list">
        {catsData?.map((cat, index) => <ListItem key={index} cat={cat} />)}
    </div>;
};

export default CatsList;
