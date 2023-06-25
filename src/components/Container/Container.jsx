import React from "react";
import "../../assets/styles/Container.scss";

export function Container({ children }) {
  return <div className={`container`}>{children}</div>;
}

export const Aside = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};
