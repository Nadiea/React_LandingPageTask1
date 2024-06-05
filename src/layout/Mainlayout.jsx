import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import Background from "./Background";



export default function Mainlayout() {
  return (
    <div className=" bg-[#131A2C]">
        <Background/>
      <Navbar/>
      <Outlet/>
     
    </div>
  )
}
