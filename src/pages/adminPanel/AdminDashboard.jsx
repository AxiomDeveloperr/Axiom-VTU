import MainDashboard from "./MainDashboard";

const AdminDashboard = () => {
    return (
        <div className="relative flex overflow-hidden">
            <div className="flex-1 flex flex-col min-h-screen w-full bg-opacity-50">
                <MainDashboard />
            </div>
        </div>
    );
};

export default AdminDashboard;
