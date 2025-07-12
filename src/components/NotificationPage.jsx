import { useState } from "react";
import { FaBell, FaCheckCircle, FaTrash } from "react-icons/fa";

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Payment Successful",
            message: "Your payment for the TV subscription was successful.",
            timestamp: "2025-07-12 10:45 AM",
            read: false,
        },
        {
            id: 2,
            title: "New Offer!",
            message: "Get 10% cashback on data purchases this week.",
            timestamp: "2025-07-11 4:30 PM",
            read: false,
        },
        {
            id: 3,
            title: "Wallet Funded",
            message: "₦5,000 has been added to your wallet.",
            timestamp: "2025-07-10 2:15 PM",
            read: true,
        },
        {
            id: 4,
            title: "Transaction Failed",
            message: "Your electricity bill payment failed due to a network error.",
            timestamp: "2025-07-10 1:20 PM",
            read: false,
        },
        {
            id: 5,
            title: "New Feature!",
            message: "You can now schedule airtime purchases in advance.",
            timestamp: "2025-07-09 5:45 PM",
            read: true,
        },
        {
            id: 6,
            title: "Account Alert",
            message: "Your profile has been updated successfully.",
            timestamp: "2025-07-08 10:10 AM",
            read: true,
        },
    ]);

    const markAsRead = (id) => {
        setNotifications((prev) =>
            prev.map((note) =>
                note.id === id ? { ...note, read: true } : note
            )
        );
    };

    const deleteNotification = (id) => {
        setNotifications((prev) => prev.filter((note) => note.id !== id));
    };

    const unreadCount = notifications.filter((n) => !n.read).length;

    const unreadNotifications = notifications.filter((n) => !n.read);

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold flex items-center justify-between mb-6">
                <span className="flex items-center">
                    <FaBell className="text-yellow-500 mr-2" /> Notifications
                </span>
                {unreadCount > 0 && (
                    <span className="primary-color text-white text-xs font-bold px-3 py-1 rounded-full">
                        {unreadCount} Unread
                    </span>
                )}
            </h2>

            <div className="space-y-4">
                {unreadNotifications.length > 0 ? (
                    unreadNotifications.map((note) => (
                        <div
                        key={note.id}
                        className="p-4 rounded-xl border-2 border-yellow-300 bg-yellow-50"
                        >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-lg">{note.title}</h3>
                                <p className="text-sm text-gray-600">{note.message}</p>
                                <p className="text-xs text-gray-400 mt-1">{note.timestamp}</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => markAsRead(note.id)}
                                    className="text-sm text-green-600 font-medium hover:underline"
                                >
                                    <FaCheckCircle className="inline mr-1" /> Read
                                </button>
                                <button
                                    onClick={() => deleteNotification(note.id)}
                                    className="text-sm text-[#880d1e] hover:text-red-700"
                                >
                                    <FaTrash className="inline" />
                                </button>
                            </div>
                        </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No unread notifications.</p>
                )}
            </div>
        </div>
    );
}

export default NotificationPage
