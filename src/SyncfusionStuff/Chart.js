import React, { useContext } from "react";
import "../App.css";
import {FruitContext} from "../Contexts/FruitContext";

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
import {Inject} from "@syncfusion/ej2-react-grids";

export function Chart1() {
    const {fruitsVal} = useContext(FruitContext);
    return (
    <>
      <br />
        <div style={{border:'1px solid black', marginLeft:'100px'}}>
      <h2>Chart Component</h2>
      <br />

      <ChartComponent
        id="charts"
        style={{ textAlign: "center" }}
        legendSettings={{ enableHighlight: true }}
        primaryXAxis={{
          labelIntersectAction: "Trim",
          labelRotation: 0,
          valueType: "Category",
          interval: 1,
          majorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
        }}
        primaryYAxis={{
          title: "Fruit Count",
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 },
        }}
        chartArea={{ border: { width: 0 } }}
        width={"100%"}
        title="Fuit basket details"
      >
        <Inject
          services={[
            ColumnSeries,
            Legend,
            Tooltip,
            Category,
            DataLabel,
            Highlight,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={fruitsVal}
            tooltipMappingName="toolTipMappingName"
            xName="name"
            columnSpacing={0.1}
            yName="price"
            type="Column"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
        </div>
    </>
  );
}
