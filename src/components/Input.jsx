const Input = ({text,type}) => {
    return (
        <div className=" relative w-64 md:w-96">
            <input type={type} className="tertiary-color rounded  w-52 lg:w-96 h-8  pr-36 pl-4 text-black" placeholder={text}/>
            {/* <button className="primary-color w-36 h-10 top-1 right-1 px-4 rounded absolute ">enter</button> */}
        </div>
    )
}

export default Input;