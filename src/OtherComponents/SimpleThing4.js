import React, { useContext } from "react";
import "../App.css";
import {Grid1} from "../SyncfusionStuff/Grid";

export function SomeText4() {
  
  return (
    <>
      <br/>
      <div style={{border:'1px solid black', width:'80%', marginLeft:'100px'}}>
        <h2>Yet another child component with no knowledge of fruits or baskets</h2>
      <Grid1/>
          <br/>
    </div>
      <br/>
    </>
  );
}
