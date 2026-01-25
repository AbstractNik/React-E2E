import { useState, Children, cloneElement } from "react";
import "./Accordion.css";

export default function AccordionV2({ children }) {
  const [openId, setOpenId] = useState(null);

  function handleToggle(id) {
    // If clicking the same item, close it. Otherwise, open the new one.
    setOpenId((prevId) => (prevId === id ? null : id));
  }

  return (
    <div className="accordion-container">
      {Children.map(children, (child, index) => {
        // Clone each child and pass props including handleToggle
        return cloneElement(child, {
          id: child.props.id || index,
          isOpen: openId === (child.props.id || index),
          onToggle: handleToggle,
        });
      })}
    </div>
  );
}
