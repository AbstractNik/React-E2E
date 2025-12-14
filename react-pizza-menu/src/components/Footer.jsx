function Footer() {
    const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
      {isOpen && <button>Order Now</button>}
      {!isOpen && <p>Come back tomorrow!</p>}
    </footer>
  );
  }
  
  export default Footer;