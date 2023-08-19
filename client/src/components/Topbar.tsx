import React from "react";
import BasicTabs from "./SelectionTabs";

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

export function Topbar(props: ContainerProps) {
  return <div style={{ width: "100vw" }}>{props.children}</div>;
}
