import HeaderNav from "../components/HeaderNav";
import React from "react";

export default function Layout(props) {
  return (
    <>
      <HeaderNav />
      <main role="main">
        {props.preContainer && props.preContainer}
        <div className="album py-5 bg-light">
          <div className="container">{props.children}</div>
        </div>
      </main>
    </>
  );
}
