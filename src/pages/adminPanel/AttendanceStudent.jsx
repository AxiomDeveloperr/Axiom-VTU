import { useState } from 'react';
import studentLists from '../../data/studentLists';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';

const AttendanceStudent = () => {
  // const navigate = useNavigate();
  const acceptedStudents = studentLists.filter((student) => student.status === 'Accepted');
  const [students, setStudents] = useState(acceptedStudents);

  const handleAttendanceChange = (studentId, attendance) => {
    setStudents(
      students.map((student) =>
        student.studentId === studentId
          ? { ...student, attendance }
          : student
      )
    );
  };

  const handleSubmit = () => {
    console.log('Attendance Submitted:', students);
    alert('Attendance has been submitted successfully!');
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="container mx-auto p-6">
        <div className="mb-6 flex items-center justify-between space-x-2">
          {/* <h2 className="text-2xl font-bold text-gray-700">Student Attendance</h2> */}
          {/* <button
            onClick={() => navigate("/admin/panel")}
            className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
          >
            Go Back to Dashboard
          </button> */}
        </div>
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">Student ID</th>
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Email</th>
                <th className="border px-4 py-2 text-left">Phone Number</th>
                <th className="border px-4 py-2 text-left">Status</th>
                <th className="border px-4 py-2 text-left">Progress (%)</th>
                <th className="border px-4 py-2 text-left">Application</th>
                <th className="border px-4 py-2 text-left">Mark Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.studentId} className="border-b">
                  <td className="border px-4 py-2">{student.studentId}</td>
                  <td className="border px-4 py-2 flex items-center space-x-2">
                    <img
                      src={`https://i.pravatar.cc/40?img=${index}`}
                      alt={student.name}
                      className="rounded-full w-8 h-8"
                    />
                    <span>{student.name}</span>
                  </td>
                  <td className="border px-4 py-2">{student.email}</td>
                  <td className="border px-4 py-2">{student.phoneNumber}</td>
                  <td className="border px-4 py-2">{student.status}</td>
                  <td className="border px-4 py-2">{student.progress}%</td>
                  <td className="border px-4 py-2">{student.applicationDate}</td>
                  <td className="border px-4 py-2 text-center">
                    <div className="flex items-center justify-center">
                      <label className="inline-flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`attendance-${student.studentId}`}
                          value="Present"
                          checked={student.attendance === 'Present'}
                          onChange={() => handleAttendanceChange(student.studentId, 'Present')}
                        />
                        <span>Present</span>
                      </label>
                      <label className="inline-flex items-center space-x-2 ml-4">
                        <input
                          type="radio"
                          name={`attendance-${student.studentId}`}
                          value="Absent"
                          checked={student.attendance === 'Absent'}
                          onChange={() => handleAttendanceChange(student.studentId, 'Absent')}
                        />
                        <span>Absent</span>
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
            >
              Submit Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceStudent;
