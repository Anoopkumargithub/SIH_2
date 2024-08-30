import React from "react";
import Dashnavbar from "../components/dashnavbar";
import Sidebar from "../components/sidebar";
import TableComponent from "../components/table";

const Report = () => {
    return (
        <div className="h-screen overflow-hidden flex flex-col w-screen">
            <Dashnavbar className="sticky top-0 z-10 "  />
            <div className="flex flex-grow ">
                <Sidebar className="sticky top-0 h-full " />
                {/* Flex-grow added to take remaining space */}
                <div className="flex-grow">
                    <TableComponent className="h-full" />
                </div>
            </div>
        </div>
    );
};

export default Report;