import { FaUserAlt } from "react-icons/fa"

const Header = () => {
    return (
        <div>
            <header className="bg-tt-white border-b-2">
                <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="p-3 bg-tt-grey bg-opacity-15 rounded-full">
                            <FaUserAlt size={32}/>
                        </div>
                        <div className="ml-8">
                            <h1 className="text-tt-black text-3xl font-bold">Almajeeri Dev</h1>
                            <p className="text-base ml-3">Administrator</p>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <div>
                            <h3 className="text-lg text-tt-black font-bold">56</h3>
                            <p>Students</p>
                        </div>
                        <div>
                            <h3 className="text-lg text-tt-black font-bold">6</h3>
                            <p>Stacks</p>
                        </div>
                        <div>
                            <h3 className="text-lg text-tt-black font-bold">12</h3>
                            <p>Mentors</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
