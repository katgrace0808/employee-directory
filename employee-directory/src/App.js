import React from "react";
import Navbar from "./components/Navbar";
import EmployeeContainer from "./components/EmployeeContainer"
import Footer from "./components/Footer";


function App() {
    return (
    //   <Router>
        <div>
          <Navbar />
          <EmployeeContainer />
          <Footer /> 
        </div>
    //   {/* </Router> */}
    );
  }
  

export default App;