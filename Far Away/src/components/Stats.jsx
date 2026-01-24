export default function Stats({ items }) {
  // 1. Early Return for empty state
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list! 🚀</em>
      </p>
    );

  // 2. Derived State (calculated every render)
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {/* 3. Conditional Rendering using Ternary Operator */}
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
