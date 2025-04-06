import { useEffect, useState } from "react";

const GreetingsComponent = () => {
    const greetings = [
        "Assalamu Alaikum",
        "Hello",
        "Hola",       
        "Bonjour",    
        "Ciao",
        "Namaste",      
        "Hallo", 
        "Olá",       
        // "こんにちは", 
        // "안녕하세요",            
        // "שלום"       
    ];
    
    const [greeting, setGreeting] = useState(greetings[0]);

    useEffect(() => {
        const changeGreeting = () => {
            let currentIndex = greetings.indexOf(greeting);
            let nextIndex = (currentIndex + 1) % greetings.length;
            setGreeting(greetings[nextIndex]);
        };

        const interval = setInterval(changeGreeting, 3000);
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [greeting])
    return (
        <div>
            <h2 className="text-left mb-2 -mt-3 text-tt-primary text-xl md:text-2xl lg:text-3xl font-bold">
                {greeting}
            </h2>
        </div>
    )
}

export default GreetingsComponent