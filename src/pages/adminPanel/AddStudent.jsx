import { useState } from "react";
import { useForm } from "react-hook-form";
import stackLists from "../../data/stackLists";
import existingStudentsData from "../../data/existingStudentsData";

const AddStudent = () => {
    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm({
        defaultValues: {
            studentId: "",
            name: "",
            email: "",
            studentPassword: "",
            cohort: 4,
            programme: "",
        }
    });

    const [isExistingStudent, setIsExistingStudent] = useState(null);

    const handleRadioChange = (e) => {
        const isExisting = e.target.value === "existing";
        setIsExistingStudent(isExisting);

        reset({
            studentId: "",
            name: "",
            email: "",
            studentPassword: "",
            cohort: 4,
            programme: "",
        });
    };

    const handleStudentIdChange = (e) => {
        const studentId = e.target.value;
        setValue("studentId", studentId);

        if (isExistingStudent) {
            const student = existingStudentsData.find((s) => s.studentId === studentId);
            if (student) {
                setValue("name", student.name);
                setValue("email", student.email);
                setValue("programme", student.stacks);
                setValue("studentPassword", student.studentPassword);
            } else {
                setValue("name", "");
                setValue("email", "");
                setValue("programme", "");
                setValue("studentPassword", "");
            }
        }
    };

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
    };

    return (
        <div className="container mx-auto p-4 sm:p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-screen-xl mx-auto p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">Add New Student</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="applicantType"
                                value="new"
                                checked={!isExistingStudent}
                                onChange={handleRadioChange}
                                className="mr-2"
                            />
                            New Applicant
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="applicantType"
                                value="existing"
                                checked={isExistingStudent}
                                onChange={handleRadioChange}
                                className="mr-2"
                            />
                            Existing Applicant
                        </label>
                    </div>

                    <div>
                        <label className="block font-medium">Student ID</label>
                        <input
                            type="text"
                            {...register("studentId", { required: "Student ID is required" })}
                            onChange={handleStudentIdChange}
                            className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500"
                            placeholder="Enter Student ID"
                        />
                        {errors.studentId && <p className="text-red-500">{errors.studentId.message}</p>}
                    </div>

                    {isExistingStudent && watch("studentId") && !existingStudentsData.find(s => s.studentId === watch("studentId")) && (
                        <p className="text-red-500 text-sm">Student not found. Please verify the Student ID.</p>
                    )}

                    <div>
                        <label className="block font-medium">Full Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Student name is required" })}
                            className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500"
                            placeholder="Enter Full Name"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500"
                            placeholder="example@email.com"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    {!isExistingStudent && (
                        <div>
                            <label className="block font-medium">Student Assigned Password</label>
                            <input
                                type="password"
                                {...register("studentPassword", { required: "Password is required" })}
                                className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500"
                                placeholder="Assign a password"
                            />
                            {errors.studentPassword && <p className="text-red-500">{errors.studentPassword.message}</p>}
                        </div>
                    )}

                    <div>
                        <label className="block font-medium">Stack / Programme</label>
                        <select
                            {...register("programme", { required: "Programme is required" })}
                            className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500"
                        >
                            <option value="">-- Select Programme --</option>
                            {stackLists.map((stack, index) => (
                                <option key={index} value={stack.value}>{stack.label}</option>
                            ))}
                        </select>
                        {errors.programme && <p className="text-red-500">{errors.programme.message}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Cohort</label>
                        <input
                            type="text"
                            {...register("cohort")}
                            value={4}
                            readOnly
                            className="w-full p-2 border rounded-lg shadow-sm bg-gray-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full sm:w-auto p-3 mt-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-300"
                    >
                        Add Student
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddStudent;
