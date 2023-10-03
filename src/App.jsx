import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  let [darkmode, setDarkmode] = useState(false);
  return (
    <div className={"app " + (darkmode && "dark ")}>
      <div className="dark:bg-black">
        <Outlet context={[darkmode, setDarkmode]} />
      </div>
    </div>
  );
}

export default App;
