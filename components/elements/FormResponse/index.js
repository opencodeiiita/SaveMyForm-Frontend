import React from 'react';
export default function FormResponse({ response }) {
  return (
    <>
      <div className="border-2 rounded-lg">
        <div className="p-4 flex flex-col">
          <div className="flex flex-row gap-1">
            <div className="text-[#001e2b] font-semibold text-sm">Name:</div>
            <div className="text-[#006bfb] font-base text-sm">Manas Gupta</div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="text-[#001e2b] font-semibold text-sm">City:</div>
            <div className="text-[#006bfb] font-base text-sm">Ludhiana</div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="text-[#001e2b] font-semibold text-sm">State:</div>
            <div className="text-[#006bfb] font-base text-sm">Punjab</div>
          </div>
          <div className="self-end text-[#001e2b] italic text-xs">
            Submittted a week ago
          </div>
        </div>
      </div>
    </>
  );
}
