import { useRef } from 'react';
import { useState } from 'react'
import { BiCamera } from 'react-icons/bi';
import { FaImages } from 'react-icons/fa6';


const UploadImage = () => {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if(file && file.type.startsWith("image/")) {
            setImage(URL.createObjectURL(file));
        }
    }

    return (
        <div className="bg-white border border-gray-500 flex flex-col items-center rounded-xl p-4">
            <div className="relative w-24 h-24 rounded-full flex items-center justify-center overflow-hidden">
                {image ? (
                    <img src={image} alt="profile picture" className="w-full h-full object-cover rounded-full" />
                ) : (
                    <div className='rounded-full'>
                        <FaImages size={96} className='text-blue-500' />
                    </div>
                )}
            </div>

            <div className='text-blue-500 text-base'>
                <button onClick={() => fileInputRef.current.click()} className='flex items-center gap-2 cursor-pointer '>
                    <BiCamera /> <span className="text-base font-bold">Upload Image</span>
                </button>
            </div>

            <input type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageUpload}
            />
        </div>
    )
}

export default UploadImage
