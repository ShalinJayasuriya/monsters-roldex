import React from "react";
import "../searchBox/searchBoxComponent.css";

export const SearchBoxComponent = ({ onChanged, placeholder }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={onChanged}
      />
    </div>
  );
}