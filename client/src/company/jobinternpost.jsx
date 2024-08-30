import React from "react";
import Navbar from '../components/navbar';
import Sidebar from '../components/companysidebar';
import Form from "../components/form";

const JobInternPost = () => {
    return (
        <div className='w-screen h-screen overflow-hidden'>
            <Navbar />
            <div className="flex h-full">
                <div className="w-1/5" > {/* Restore sidebar to its original width */}
                    <Sidebar />
                </div>
                <div className="w-4/5 bg-[#0d0e0f]">
                    <div className="w-full h-full bg-[#1a1b1d] p-6 rounded-lg shadow-lg overflow-y-auto">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobInternPost;
