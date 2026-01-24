import { useState } from "react";
import "./Accordion.css";
import AccordionItem from "./AccordionItem";

export default function Accordion({ items }) {
  const [openItems, setOpenItems] = useState(new Set());

  function handleToggle(id) {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }

  return (
    <div className="accordion-container">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
