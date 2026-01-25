export default function BillInput({ bill, onSetBill }) {
  return (
    <div className="bill-input-container">
      <label className="bill-label">How much was the bill?</label>
      <input
        type="text"
        className="bill-input"
        placeholder="Enter bill amount..."
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
