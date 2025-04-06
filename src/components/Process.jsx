const Process = ({title, description}) => {
    return (
      <div className="flex flex-col items-left justify-left px-4 sans mt-20 lg:px-32 mx-auto lg:max-w-7xl">
                <h2 className="text-2xl font-semibold text-tt-primary mb-4">Our Process</h2>
        <div className="flex flex-col  lg:flex-row gap-8 text-left lg:text-left mt-4">
          <h3 className="text-tt-black text-3xl font-bold mb-0 lg:mb-8 max-w-screen-lg">{title}</h3>
          <p className="font-normal text-lg">{description}</p>
        </div>
      </div>
    )
  }
  
  export default Process