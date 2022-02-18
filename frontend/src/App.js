import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Form from "./pages/Form";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/form">
            <Route path=":movieID" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
