import { useForm } from "react-hook-form"



const InputForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
      };
    
      return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">React Hook Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
    
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                {...register("email", { 
                  required: "Email is required", 
                  pattern: { 
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, 
                    message: "Please enter a valid email address" 
                  }
                })}
                className="w-full p-2 border rounded"
                onInput={() => trigger("email")}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
    
            <div>
              <label className="block text-sm font-medium">Select Option</label>
              <select {...register("option", { required: "Option is required" })} className="w-full p-2 border rounded">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              {errors.option && <p className="text-red-500 text-sm">{errors.option.message}</p>}
            </div>
    
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      );
}

export default InputForm
