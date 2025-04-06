import { useState } from "react";
import mentorLists from "../../data/mentorLists"; 

const AssignMentor = () => {
    const [mentorId, setMentorId] = useState("");
    const [mentorName, setMentorName] = useState("");
    const [mentorEmail, setMentorEmail] = useState("");
    const [mentorPhone, setMentorPhone] = useState("");
    const [mentorStack, setMentorStack] = useState("");
    const [assignedCourses, setAssignedCourses] = useState([]);

    const allCourses = {
        "Web Development": ["HTML", "CSS", "JavaScript", "React"],
        "Graphics Design": ["Photoshop", "Illustrator", "UI/UX Design"],
        "Product Design": ["Sketch", "Figma", "Prototyping", "User Research"],
        "Cloud Engineering & IT Ops": ["AWS", "Azure", "Docker", "Kubernetes"],
        "Data Analysis": ["Excel", "Python", "SQL", "Tableau"],
        "Motion Design": ["After Effects", "Cinema 4D", "Animation Basics"],
    };

    const handleMentorIdChange = (e) => {
        const selectedMentorId = e.target.value;
        setMentorId(selectedMentorId);

        const mentor = mentorLists.find((m) => m.mentorId === selectedMentorId);

        if (mentor) {
        setMentorName(mentor.name);
        setMentorEmail(mentor.email);
        setMentorPhone(mentor.phoneNumber);
        setMentorStack(mentor.stack);
        setAssignedCourses(allCourses[mentor.stack] || []); 
        } else {
        setMentorName("");
        setMentorEmail("");
        setMentorPhone("");
        setMentorStack("");
        setAssignedCourses([]);
        }
    };

    const handleAssignMentor = () => {
        if (!mentorId) {
        alert("Please select a mentor!");
        return;
        }

        const assignedStack = mentorStack;
        const assignedCoursesList = assignedCourses;

        console.log("Mentor Assigned:");
        console.log("Mentor ID:", mentorId);
        console.log("Mentor Name:", mentorName);
        console.log("Mentor Email:", mentorEmail);
        console.log("Mentor Phone:", mentorPhone);
        console.log("Stack:", assignedStack);
        console.log("Assigned Courses:", assignedCoursesList);

        sendEmailToMentor(mentorEmail, assignedStack, assignedCoursesList);

        alert("Mentor successfully assigned!");

        setMentorId("");
        setMentorName("");
        setMentorEmail("");
        setMentorPhone("");
        setMentorStack("");
        setAssignedCourses([]);
    };

    // Email API
    const sendEmailToMentor = (email, stack, courses) => {
        console.log(`Sending email to ${email}...`);
        const courseList = courses.join(", ");
        console.log(`Email sent to ${email} with the following details:`);
        console.log(`Assigned Stack: ${stack}`);
        console.log(`Assigned Courses: ${courseList}`);
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-center mb-4">Assign Mentor to Courses</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold">Mentor ID</label>
                    <select
                        value={mentorId}
                        onChange={handleMentorIdChange}
                        className="w-full p-2 border rounded-md focus:outline-none"
                    >
                        <option value="">Select Mentor</option>
                        {mentorLists.map((mentor) => (
                            <option key={mentor.mentorId} value={mentor.mentorId}>
                                {mentor.mentorId} - {mentor.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold">Mentor Name</label>
                    <input
                        type="text"
                        value={mentorName}
                        readOnly
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Mentor Name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold">Mentor Email</label>
                    <input
                        type="email"
                        value={mentorEmail}
                        readOnly
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Mentor Email"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold">Mentor Phone</label>
                    <input
                        type="text"
                        value={mentorPhone}
                        readOnly
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Mentor Phone"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold">Mentor Stack</label>
                    <input
                        type="text"
                        value={mentorStack}
                        readOnly
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Mentor Stack"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold">Assigned Courses</label>
                    <ul className="list-disc pl-5">
                        {assignedCourses.map((course, index) => (
                        <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={handleAssignMentor}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Assign Mentor
                </button>
            </div>
        </div>
    );
};

export default AssignMentor;
