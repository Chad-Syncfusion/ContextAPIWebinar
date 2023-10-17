import React, { useContext } from "react";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import "../App.css";
import { FruitContext } from "../Contexts/FruitContext";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Toolbar,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

export function Grid1() {
  const { fruitsVal, setFruitsVal } = useContext(FruitContext);
  var gridInstance;
  const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel"];
  const editSettings = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };
  let array;
  const actionComplete = (args) => {
    if (args.requestType == "save" || args.requestType == "delete") {
      array = gridInstance.dataSource;
      setFruitsVal([...array]);
    }
  };

  return (
    <>
      <br />
      <div style={{border:'1px solid black', width:'90%', marginLeft:'100px'}}>
      <h2>Grid component</h2>
      <br />     

      <GridComponent
        id="grid"
        dataSource={fruitsVal}
        ref={(grid) => (gridInstance = grid)}
        toolbar={toolbarOptions}
        editSettings={editSettings}
        actionComplete={actionComplete}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="name"
            isPrimaryKey="true"
            headerText="Name"
            width="100"
          />
          <ColumnDirective field="price" headerText="Price" width="100" />
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]} />
      </GridComponent>
      </div>        
    </>
  );
}
