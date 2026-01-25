export default function Output({ bill, tip }) {
  return (
    <div className="output-container">
      <h3 className="output-title">
        You pay <span className="total-amount">${(bill + tip).toFixed(2)}</span>
      </h3>
      <p className="output-breakdown">
        ${bill.toFixed(2)} bill + ${tip.toFixed(2)} tip
      </p>
    </div>
  );
}
