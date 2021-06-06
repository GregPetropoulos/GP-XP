import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import Hamburger from "./components/Hamburger";


function App () {
    return (
      <Router>
       <div>
         <Header/>         
         <Wrapper>  
           <Route exact path="/" component={Home} />
         </Wrapper>
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
