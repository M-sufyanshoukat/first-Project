import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [para, setPara] = useState(false);

  const paraHandler = () => {


    const updatedPara = !para;

    setPara(updatedPara);
  };
  return (
    <>
      {para && <Loader />}

      <button onClick={paraHandler}>{para ? "Hide" : "Show"}</button>
    </>
  );
}

export default App;
