import { hairyGuy} from '../assets/images';
import ProgramBenefit from '../components/ProgramBenefit'
import benefits from '../data/benefits';

const Program = () => {
  return (
    <div className=" lg:gap-10 w-full flex flex-row lg:px-4 px-4 mb-24 pb-4 bg-tt-grey bg-opacity-10 lg:flex lg:flex-row lg:justify-center lg:items-center ">
     
      <div className=" lg:w-2/4 py-4 lg:pr-20 ">
      <div className="lg:justify-center">
      <h1 className="text-2xl font-bold pl-4">Program Benefits</h1>
      </div>
       {benefits.map((benefits)=>(
        <ProgramBenefit 
        icon={benefits.icon}
        title={benefits.title}
        desc={benefits.desc} 
        />
        
       ))}
       
       </div>
       <div className=" lg:w-1/3 mt-4 lg:mr-32">
        <img src={hairyGuy} alt="picture" className="rounded hidden md:block"/>
      </div>
    </div>
  )
}

export default Program