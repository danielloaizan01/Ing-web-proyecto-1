
import { Centerside } from "@/components/Centerside";
import { Leftsidebar } from "@/components/Leftsidebar";

const Home =()=>{
  return (
  <div className='bg-black h-screen flex'>
    <Leftsidebar/>
    <Centerside/>
    <aside className='debug w-24'></aside>
  </div>)
}
export default Home;