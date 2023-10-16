import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { FruitContext } from "./Contexts/FruitContext";
import { fruits } from "./Data/Fruits";
import { App } from "./App";
import {SomeText} from "./SimpleThing";
import { registerLicense } from "@syncfusion/ej2-base";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Registering Syncfusion license key
//This evaluation key will expire on 14 November 2023
registerLicense(
  "ORg4AjUWIQA/Gnt2VlhhQlJCfV5DQmJNYVF2R2BJfVR0d19GaUwxOX1dQl9gSH5Sc0RnXXxdcHZUTmk=",
);

root.render(  
    <>
    <SomeText/>
    <App/>
    </>
);
