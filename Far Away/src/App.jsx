import "./App.css";
import { useState } from "react";
// import Flashcards from "./Flashcard";
import Counter from "./Counter";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Accordion from "./components/Accordion";
import AccordionV2 from "./components/AccordionV2";
import AccordionItemV2 from "./components/AccordionItemV2";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

const accordionData = [
  {
    id: 1,
    question: "Where are these chairs assembled?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,
    question: "How long do I have to return my chair?",
    content:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,
    question: "Do you ship to countries outside the EU?",
    content:
      "Yes, we ship to many countries outside the EU. Please check our shipping policy for more details.",
  },
];

// App.js
export default function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearItems() {
    if (items.length === 0) {
      window.alert("Nothing to clear! The list is already empty.");
      return;
    }
    const confirmed = window.confirm(
      "Are you sure you want to clear all items?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
      <hr />
      <h2>Accordion V1 (Multiple Open)</h2>
      <Accordion items={accordionData} />
      <hr />
      <h2>Accordion V2 (Single Open - Composition Pattern)</h2>
      <AccordionV2>
        <AccordionItemV2 id={1} title="Where are these chairs assembled?">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium, quaerat temporibus quas dolore provident nisi ut
            aliquid ratione beatae sequi aspernatur veniam repellendus.
          </p>
        </AccordionItemV2>
        <AccordionItemV2 id={2} title="How long do I have to return my chair?">
          <div>
            <p>Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.</p>
            <ul>
              <li>30 days return policy</li>
              <li>Free return shipping</li>
            </ul>
          </div>
        </AccordionItemV2>
        <AccordionItemV2 id={3} title="Do you ship to countries outside the EU?">
          <p>Yes, we ship to many countries outside the EU. Please check our shipping policy for more details.</p>
          <button>Check Shipping</button>
        </AccordionItemV2>
      </AccordionV2>
      {/* <Flashcards /> */}
      {/* <Counter /> */}
    </div>
  );
}
