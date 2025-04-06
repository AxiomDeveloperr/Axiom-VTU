// import AddMentor from "./AddMentor";
import MentorLists from "./MentorLists";
// import MentorAssign from "./MentorAssign";
import AssignedMentorTable from "./AssignedMentorTable";

const MentorView = () => {
    return (
        <div className="container mx-auto p-4">
            {/* <AddMentor/> */}
            {/* <MentorAssign /> */}
            <MentorLists />
            <div className="mt-8">
                {/* <MentorAssign /> */}
            </div>
            <div className="mt-8">
                <AssignedMentorTable />
            </div>
        </div>
    )
}

export default MentorView
