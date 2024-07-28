import React from "react";

const StudentCard = ({ client }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex ">
      <img
        src={client.avatar}
        alt={client.name}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <div className="mb-2">
          <div className="text-lg font-semibold">{client.name}</div>
          <div className="text-gray-500">{client.bio || "#None Bio" }</div>
        </div>
        <div className="text-sm text-gray-600">
          <div className="text-gray-700">Lead {client.id}</div>
          <div className="flex items-center gap-2 mt-1">
            <div className="text-[#379AE6FF] text-[14px] leading-[22px] font-sans font-normal">
              {client.tag}
            </div>
            <div
              className={`px-2 py-1 rounded-2xl text-[12px] leading-[20px] font-sans font-normal ${
                client.status === "New lead"
                  ? "bg-[#F3F4FBFF] text-[#6E75D1FF]"
                  : "bg-[#FFF4F0FF] text-[#FE763EFF]"
              }`}
            >
              {client.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
