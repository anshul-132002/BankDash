import React from 'react';
import CardData from "../data/CardData.json";

function TransactionCard() {
    return (
        <div className="relative p-2 bg-white rounded-2xl shadow-lg w-[350px] h-[200px] text-slate-400">
            <div className="space-y-4">
                {CardData.transactionHistory.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={transaction.img} alt="Transaction Icon" className="w-8 h-8 mr-3" />
                            <div>
                                <p className="text-sm font-semibold text-gray-700">{transaction.description}</p>
                                <p className="text-xs text-gray-400">{transaction.date}</p>
                            </div>
                        </div>
                        <p
                            className={`text-sm font-semibold ${
                                transaction.type === 'withdraw' ? 'text-red-500' : 'text-green-500'
                            }`}
                        >
                            {transaction.type === 'withdraw' ? `- ${transaction.amount}` : `+ ${transaction.amount}`}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TransactionCard;
