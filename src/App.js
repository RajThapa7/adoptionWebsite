import Home from "./components/home";
import WhyAdopt from "./components/why-adopt";
import {BrowserRouter as Router, Routes,Route, Switch} from 'react-router-dom'
import ScrollUp from "./components/scrollUp";
import ScrollToTop from "./components/scrollTop";
import SaveLife from "./components/saveLife";
import Login from "./components/login";
import Register from "./components/register";
import Details from "./components/details";
import { createContext, useState } from "react";
import AdoptionForm from "./components/adoptionForm";
import ThankYou from "./components/thankYou";
export const IdContext = createContext();
function App() {
  const [id, setId] = useState('')
  return (
    <IdContext.Provider value={{id, setId}}>
    <ScrollUp></ScrollUp>
    <ScrollToTop></ScrollToTop>
    <Routes>      
<Route path="/" element={<Home/>}/>
<Route path="/why-adopt" element={<WhyAdopt/>}/>
<Route path="/save-life" element={<SaveLife/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/details" element={<Details/>}/>
<Route path="/adoption-form" element={<AdoptionForm/>}/>
<Route path="/thank-you" element={<ThankYou/>}/>




    </Routes>
    </IdContext.Provider>
  );
}

export default App;
