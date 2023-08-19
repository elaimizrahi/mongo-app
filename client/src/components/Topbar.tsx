import React from "react";
import BasicTabs from "./SelectionTabs";
import { COLORS } from "../constants";

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

function Topbar(props: ContainerProps) {
  return (
    <div style={{ width: "100vw", backgroundColor: "#010a01" }}>
      {props.children}
    </div>
  );
}

export default Topbar;
