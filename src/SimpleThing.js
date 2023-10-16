import React, { useContext } from "react";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import "./App.css";
import { FruitContext } from "./Contexts/FruitContext";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Toolbar,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
  Highlight,
} from "@syncfusion/ej2-react-charts";

export function SomeText() {
  

  return (
    <>
    <div style={{border:'1px solid black'}}>
        <h1>Some other component with no knowledge of any fruits or baskets</h1>
    </div>
    </>
  );
}
