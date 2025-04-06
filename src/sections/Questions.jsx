import Button from "../components/Button"
import Question from "../components/Question"
import questions from "../data/questions"
import Timer from "../components/Timer"
import Alert from "../components/Alert"
import React, { useState } from "react"


const Questions = () => {
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = Math.random() > 0.5; // Simulate success or failure
    if (isSuccess) {
      setAlert({ show: true, message: "Your answer has been submitted successfully!", type: "success" });
    } else {
      setAlert({ show: true, message: "There was an error submitting your answers.", type: "error" });
    }

    setTimeout(() => {
      window.location.reload();
    }, 3000); 
  };

  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-center items-center my-12 lg:h-48 h-64 px-4 py-10 bg-tt-grey bg-opacity-10 gap-4 lg:gap-12">
        <h1 className="text-tt-black text-lg font-semibold">
          You have 10 general questions to be answered in 5 minutes. Good luck, Champ!
        </h1>
        <div className="flex flex-col justify-center items-center bg-tt-grey bg-opacity-10 ">
          <h1 className="text-2xl font-bold mb-4">5 minutes</h1>
          <Timer initialTime={300} />
        </div>
      </div>

      {questions.map((question, index) => (
        <Question
          key={index}
          index={index + 1}
          title={question.title}
          option={question.option}
        />
      ))}

      <div className="mb-4 max-w-screen-xl mx-auto bg-tt-grey bg-opacity-10 lg:h-32 lg:py-6 lg:px-16 px-4 py-2">
        <div className="flex flex-row gap-6">
          <h1 className="text-tt-black font-medium">11.</h1>
          <label htmlFor="file" className="block text-tt-black font-medium mb-2 text-lg">
            Upload a clear picture of yourself
          </label>
        </div>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="ml-10 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                     file:rounded file:border-0 file:text-sm file:font-semibold
                     file:bg-tt-primary-100 file:text-tt-primary hover:file:bg-tt-primary hover:file:bg-opacity-40"
        />
      </div>

      <div  className="flex flex-col gap-6 lg:px-16 px-4 max-w-screen-xl mx-auto bg-tt-grey bg-opacity-10 lg:h-32 py-2 lg:py-6">
        <div className="flex flex-row gap-6">
          <h1 className="text-tt-black font-medium">12.</h1>
  <label htmlFor="portfolio" className="block text-lg font-medium text-tt-black ">
    Social Links (e.g., Facebook, Twitter, Instagram etc.)
  </label>
  </div>
  <input
    type="url"
    id="portfolio"
    name="portfolio"
    placeholder="https://example.com"
    className="mt-1 block w-1/2 p-2 border border-tt-primary rounded-md shadow-md focus:ring-tt-primary focus:border-tt-primary"
    required
  />
</div>

      <div className="max-w-md mx-auto mt-10">
        {alert.show && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert({ ...alert, show: false })}
          />
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center items-center px-4">
            <Button text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Questions;