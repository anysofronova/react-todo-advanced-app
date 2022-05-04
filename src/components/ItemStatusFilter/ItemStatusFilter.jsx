import React from "react";
import cn from "classnames";
import style from "./ItemStatusFilter.module.css";

const ItemStatusFilter = () => {
  return (
    <div className={cn(style.btnGroup)}>
      <button type="button" className={cn(style.btn, "btn")}>
        All
      </button>
      <button type="button" className={cn(style.btn, "btn")}>
        Active
      </button>
      <button type="button" className={cn(style.btn, "btn")}>
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;