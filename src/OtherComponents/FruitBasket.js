import React, {useContext, useState} from "react";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import "../App.css";
import {FruitContext} from "../Contexts/FruitContext";

import {Chart1} from "../SyncfusionStuff/Chart";
import {Grid1} from "../SyncfusionStuff/Grid";
import {fruits} from "../Data/Fruits";

export function FruitBasket() {
    const { fruitsVal, setFruitsVal } = useContext(FruitContext);
        
  return (
     
    <>
      <br />
        <div style={{border:'1px solid black', width:'90%'}}>
      <label>Fruit Basket component</label>
      <br />
      <h1>Fruit Basket ({fruitsVal.length})</h1>
      <ul>
        {fruitsVal.map((fruit) => (
          <li key={fruit.name}>
            {fruit.name} (${fruit.price.toFixed(2)})
          </li>
        ))}
      </ul>
        </div>
    </>
     
  );
}