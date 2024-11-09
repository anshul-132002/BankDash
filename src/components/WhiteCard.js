import CardData from "../data/CardData.json";

function WhiteCard() {
  const { name, amount, cardNumber, expirationDate } = CardData.cardDetails[0];

  return (
    <div className="relative p-2 bg-white rounded-2xl shadow-lg w-[350px] h-[200px] text-slate-400">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm ">Balance</p>
          <p className="text-2xl font-bold text-gray-500">{amount}</p>
        </div>
              </div>

      <div className="mt-6 flex justify-between">
        <div>
          <p className="text-sm font-Lato">CARD HOLDER</p>
          <p className="text-sm font-semibold font-Lato text-gray-500">
            {name}
          </p>
        </div>

        <div>
          <p className="text-xs">VALID THRU</p>
          <p className="text-lg font-semibold text-gray-500">
            {expirationDate}
          </p>
        </div>
      </div>

    
      <div className="mt-6  flex justify-between items-center">
        <p className="text-lg text-gray-500 font-semibold tracking-wider">{cardNumber}</p>
        <img src="circledark.png" alt="card logo overlay" className="w-8 h-6 opacity-70" />
      </div>
    </div>
  );
}

export default WhiteCard;
