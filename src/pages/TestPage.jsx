
// import ContactPreview from "../components/ContactPreview";
// import About from "../myComponents/About"
import Navbars from "../myComponents/Navbars";
import AirtimeToCash from "./AirtimeToCash";
// import ContactPage from "./ContactPage";
// import ServicePage from "./ServicePage";
import TransactionHistory from "./TransactionHistory";

const TestPage = () => {

    return (
        <div>
            <Navbars />
            {/* <About />
            <ContactPreview />
            <ServicePage />
             <ContactPage /> */}
             <TransactionHistory />
             <AirtimeToCash />
            {/* <Input /> */}
        </div>
    )
} 


export default TestPage;