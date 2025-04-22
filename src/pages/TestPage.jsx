
import ContactPreview from "../components/ContactPreview";
import About from "../myComponents/About"
import Navbars from "../myComponents/Navbars";
import ContactPage from "./ContactPage";
import ServicePage from "./ServicePage";

const TestPage = () => {

    return (
        <div>
            <Navbars />
            <About />
            <ContactPreview />
            <ServicePage />
             <ContactPage /> 
   
            {/* <Input /> */}
        </div>
    )
} 


export default TestPage;