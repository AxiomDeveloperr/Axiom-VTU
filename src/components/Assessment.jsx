import { Link } from 'react-router-dom'
import Button from './Button'

const Assessment = ({title, desc,heading}) => {
  return (
    <div className="lg:justify-center lg:items-center">
        <div className="flex flex-col gap-4 lg:justify-center lg:items-center px-4 p-10 bg-tt-grey bg-opacity-10 lg:p-10">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-md text-gray-600">{desc}</p>
        </div>
        <div className="lg:justify-center lg:items-center flex flex-col lg:m-24 px-4 my-24 gap-10">
            <h2 className="text-xl font-medium">{heading}</h2>
            <Link to="/question">
            <Button text="Start" />
            </Link>
           
        </div>
    </div>
  )
}

export default Assessment