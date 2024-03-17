import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {App} from "./Components/App";
import {NavigationProvider} from "./Context/navigation_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NavigationProvider>
		<App/>
	</NavigationProvider>
);
