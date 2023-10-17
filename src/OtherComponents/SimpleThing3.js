import React, { useContext } from "react";
import "../App.css";
import {SomeText4} from "./SimpleThing4";

export function SomeText3() {
  
  return (
    <>
      <br/>
      <div style={{border:'1px solid black', width:'85%', marginLeft:'100px'}}>
        <h2>Some other child component with no knowledge of fruits or baskets</h2>
    
      <SomeText4/>
      </div>
      <br/>
    </>
  );
}
