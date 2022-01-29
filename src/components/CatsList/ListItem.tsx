import React, { memo } from "react";
import { Cat } from "../../models/Cat";

import Popover from "../Popover";
import "./styles.css"

type ListItemProps = {
  cat: Cat
};

const ListItem = ({ cat }: ListItemProps) => {
  const { name, image, description } = cat;
  console.log("name:", name)
  return (
    <div className="list-item">
        <img src={image} alt="Cat" className="image"/>
      <div>{name}</div>
        <Popover tooltipMessage={description}>
          More info...
        </Popover>
    </div>
  );
};

export default memo(ListItem);