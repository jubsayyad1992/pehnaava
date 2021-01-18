import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <hi className="title"> {title.toUpperCase()}</hi>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
