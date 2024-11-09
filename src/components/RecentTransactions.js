import React from "react";
import UserData from "../data/TransferData.json";

function RecentTransactions() {
  return (
    <div className="top-[2804px] left-[416px] w-[445px] h-[276px] bg-white opacity-100 shadow-lg rounded-lg p-4">
      <ul className="flex justify-around">
        {UserData.users.map((user) => (
          <li key={user.id} className="text-center">
            <img
              src={user.image}
              alt="user"
              className="w-[70px] h-[70px] rounded-full mx-auto mb-2"
            />
            <div className="text-sm font-Lato text-slate-600 font-semibold">
              {user.name}
            </div>
            <div className="text-sm font-Noto text-slate-500">{user.title}</div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-2">
        <span className="text-slate-400 text-sm w-28">Write Amount</span>

        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-[250px] justify-between">
          <span className="text-lg font-semibold text-slate-500">525.50</span>
          <button className="bg-blue-700 text-white h-12 w-20 rounded-full flex items-center justify-center ml-2">
            <span className="mr-1">Send</span>
            <img src="message.png" alt="send icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
