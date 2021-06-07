import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';


// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";
// import './App.css';

function App () {
    return (
      <Router>
       <div>
         {/* <Header/>          */}
         {/* <Wrapper>   */}
           {/* <Route exact path="/" component={Home} /> */}
           {/* <Route exact path="/projects" component={Projects} /> */}
           {/* <Route exact path="/about" component={About} /> */}
           <Route exact path="/contact" component={Contact} />
         {/* </Wrapper> */}
         {/* <Footer /> */}
         </div>
         </Router>
         );
    }
  



// function App() {
//   return (
//     <Router>
//       <div>
//           <Header />
//         {/* <Wrapper>  */}
//           <Route exact path="/" component={Home} />
//           {/* <Route exact path="/nav" component={Nav} /> */}
//         {/* </Wrapper>
//         <Footer /> */}
//       </div>
//     </Router>
//   );
// }
export default App;
