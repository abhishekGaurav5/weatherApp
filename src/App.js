import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div>
      <Weather />
    </div>
  );
}

export default App;
