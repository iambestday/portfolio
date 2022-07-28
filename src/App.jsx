import "./App.css";
import { Suspense } from "react";
import Header from "./assets/container/Header";
import Footer from "./assets/container/Footer";
import Section from "./assets/container/Section";

function App() {
  return (
   <div>
   
        <Suspense fallback={null}>
         <Header/>
         </Suspense>
         <Section/>
         <Footer/>
         </div>
  );
}

export default App;
