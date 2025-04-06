import notices from "../../data/notices"

const NoticeBoard = () => {
    return (
        <div>
            <div className="w-full bg-white shadow-lg rounded-lg p-6 overflow-y-auto h-80">
                <h2 className="text-xl font-semibold text-gray-800">Notice Board</h2>
                <div className="mt-4 space-y-4">
                    {notices.map((notice, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                        <div className="flex items-center space-x-2">
                            <span
                                className={`text-white text-sm font-semibold px-3 py-1 rounded-full ${notice.bgColor}`}
                            >
                                {notice.date}
                            </span>
                        </div>
                        <p className="mt-2 text-gray-800 font-medium">{notice.text}</p>
                        <p className="text-gray-500 text-sm mt-1">
                        {notice.author} / {notice.time}
                        </p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NoticeBoard
