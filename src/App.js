import React, {useContext, useState} from "react";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import "./App.css";
import {FruitBasket} from "./OtherComponents/FruitBasket";
import { FruitContext } from "./Contexts/FruitContext";

import {Chart1} from "./SyncfusionStuff/Chart";
import {Grid1} from "./SyncfusionStuff/Grid";
import {fruits} from "./Data/Fruits";

export function App() {

    const [fruitsVal, setFruitsVal] = useState(fruits);
    return (
        <>
            <br/>
            <FruitContext.Provider value={{ fruitsVal, setFruitsVal }}>
                <div style={{border:'1px solid black'}}>
                    <br/>
                <label>App component</label>
                    <br/>
                <FruitBasket/>
                <Grid1/>
                <Chart1/>
                </div>
            </FruitContext.Provider></>
        );
 
}