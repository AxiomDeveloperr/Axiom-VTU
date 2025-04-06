import faqList from "../data/faqList";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto gap-10 px-4 sm:px-6 lg:px-5 py-10 mb-10">
      <div className="space-y-4">
        <p className=" text-tt-primary font-bold text-xl">FAQ</p>
        <p className="font-bold text-4xl text-tt-black leading-2">
          Here are Some Answer For Frequntly asked Questions
        </p>
        <p className="font-semibold text-xl text-tt-grey">
          We got alot of message with the same questions, so here are some fast
          answers for popular questions
        </p>
      </div>
      <div className="text-tt-primary flex-1">
        {faqList.map((list) => (
          <FaqItem
            key={list.answer}
            question={list.question}
            answer={list.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
