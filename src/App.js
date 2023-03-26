import {Container,Stack,Button} from "react-bootstrap";
// import  {Navbar,FormControl,FormGroup} from "react-bootstrap/lib/NavbarHeader";
import './componets/Itemstack';
import{BrowserRouter as Router,Switch,Route,Link,Routes} from "react-router-dom"

import './App.css';
import Itemstack from "./componets/Itemstack";
import Slider from "./componets/Slider";
import Topmenu from "./componets/Topmenu";
import Mainmenu from "./componets/Mainmenu";
import Shoppingcart from "./componets/Shoppingcart";
import Gridcart from "./componets/Gridcart";
import Topbar from "./componets/Topbar";
import Homescreen from "./screens/Homescreen";
import Basicexample from "./screens/Basicexample";
import Kartdetails from "./screens/Kartdetails";
import User from "./User"
import Routerz from "./Routerz";
import Example from "./screens/Example"
import Itemdetails from "./itemcart/Itemdetails";
// import Server from "./backend/Server"
// import Routerz from "./Routerz"


function App() 
{
  return (
   

   <Router>
    

     <Container>

      {/* <Server/> */}
      <Topbar/><br/>
      <Topmenu/>
      <Mainmenu/><br/>
      <Routes>
      <Route path="/item" Component={Itemdetails} exact /> 
      <Route path="/" Component={Routerz} exact />
      <Route path="/:id" Component={Kartdetails} />
      
      {/* <Route path="/:id" element={<Kartdetails/>} exact/> */}

      
      </Routes>
    
     
    
      

    
  {/* //     {/* <Gridcart/><br/> */}
      
      
    {/* <Itemstack/> */}
    {/* <Footer/> */}

     </Container>
    
      
    </Router>  

  )
}
export default App;
    
       
    //   <Container>
    //     <Stack direction="horizontal" gap={3}>
    //   <div className="bg-light border">First item</div>
    //   <div className="bg-light border">Second item</div>
    //   <div className="bg-light border">Third item</div>
    // </Stack>
    
    //   </Container>






 


  

/* 
  //  <Router>
  //    <Container>
     

  //     <Topbar/><br/>
  //     <Topmenu/>
  //     <Mainmenu/>
  //     <Slider/><br/>
  //     <Homescreen/>
     
    
      

    
  //     {/* <Gridcart/><br/> */
      
  //     <Shoppingcart/><br/>
  //   {/* <Itemstack/> */}
  //   {/* <Footer/> */}

  //    </Container>
    

  //    </Router> 
       

   

  




