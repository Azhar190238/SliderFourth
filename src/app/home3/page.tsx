import About from '../components/home3/About'
import Hero2 from '../components/home2/Hero2';
import BMI from '../components/BMI';
export default function Home() {
    return (
     <div>
        <Hero2></Hero2>
      <div className='bg-[#E9ECFF]'><About></About></div>
       <div className='bg-[#000] text-white'><BMI></BMI></div>
     </div>
    )}