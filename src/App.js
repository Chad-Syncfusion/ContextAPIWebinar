import React, { useContext, useState } from "react";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import "./App.css";
import { FruitBasket } from "./OtherComponents/FruitBasket";
import { FruitContext } from "./Contexts/FruitContext";

import { Chart1 } from "./SyncfusionStuff/Chart";
import { Grid1 } from "./SyncfusionStuff/Grid";
import { fruits } from "./Data/Fruits";
import { SomeText2 } from "./OtherComponents/SimpleThing2";

export function App() {
  const [fruitsVal, setFruitsVal] = useState(fruits);
  return (
    <>
      <br />
      <FruitContext.Provider value={{ fruitsVal, setFruitsVal }}>
        <div style={{ border: "1px solid black" }}>
          <br />
          <h2>
            App component. This is where the FruitContext Provider is created.
          </h2>
          <br />
          <SomeText2 />
          <table style={{ width: "90%" }}>
            <tbody>
              <tr>
                <td>
                  <Chart1 />
                </td>
                <td>
                  <FruitBasket />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </FruitContext.Provider>
    </>
  );
}
