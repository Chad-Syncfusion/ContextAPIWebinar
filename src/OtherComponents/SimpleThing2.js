import React, { useContext } from "react";
import "../App.css";
import {SomeText3} from "./SimpleThing3";

export function SomeText2() {
  
  return (
    <>
      <br/>
      <div style={{border:'1px solid black', width:'90%', marginLeft:'100px'}}>
        <h2>Some child component with no knowledge of fruits or baskets</h2>
      <SomeText3/>
    </div>
      <br/>
    </>
  );
}
