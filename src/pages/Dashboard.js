// Dashboard.js
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import BlueCard from "../components/BlueCard";
import WhiteCard from "../components/WhiteCard";
import TransactionCard from "../components/TransactionCard";
import WeeklyActivityChart from "../components/WeeklyActivityChart";
import ExpenseStatistics from "../components/ExpenseStatistics";
import RecentTransactions from "../components/RecentTransactions"; // Import the RecentTransactions component
import BalanceHistoryChart from "../components/BalanceHistoryChart";

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-Lato text-slate-700 font-semibold">
                  My Cards
                </h2>
                <h2 className="text-xl font-Lato text-slate-700 font-semibold ">
                  See All
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BlueCard />
                <WhiteCard />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-Lato font-semibold text-slate-700 mb-4">
                Recent Transactions
              </h2>
              <TransactionCard />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div>
              <h1 className="text-xl flex justify-around font-Lato text-slate-700 font-semibold mb-4">
                Weekly Activity
              </h1>
              <WeeklyActivityChart />
            </div>
            <div>
              <h1 className="text-xl font-Lato  text-slate-700 font-semibold mb-4">
                Expense Statistics
              </h1>
              <ExpenseStatistics />
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-around  items-center mb-4">
              <span className="text-xl font-Lato text-slate-700 font-semibold">
                Quick Transfer
              </span>
              <span className="text-xl font-Lato text-slate-700 font-semibold">
                Balance History
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <RecentTransactions />
              <div className="flex flex-col">
                <div className="w-[635px] h-[276px]">
                  <BalanceHistoryChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
