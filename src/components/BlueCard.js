import CardData from "../data/CardData.json";

function BlueCard() {
  const { name, amount, cardNumber, expirationDate } = CardData.cardDetails[0];

  return (
    <div className="relative p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg w-[350px] h-[200px] text-white">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm">Balance</p>
          <p className="text-2xl font-bold">{amount}</p>
        </div>
        <img src="chip.png" className="w-8 h-8" alt="Card chip" />
      </div>

      <div className="mt-6 flex justify-between">
        <div>
          <p className="text-sm font-Lato">CARD HOLDER</p>
          <p className="text-sm font-semibold font-Lato">{name}</p>
        </div>

        <div>
          <p className="text-xs">VALID THRU</p>
          <p className="text-lg font-semibold">{expirationDate}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-lg font-semibold tracking-wider">{cardNumber}</p>
        <img src="circle.png" alt="card logo overlay" className="w-8 h-6 opacity-70" />
      </div>
    </div>
  );
}

export default BlueCard;
