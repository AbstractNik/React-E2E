async function loadTodos() {
    try {
      console.log("Fetching todos...");
      const res = await fetch("https://jsonplaceholder.typicode.com/todos"); // wait for response
      console.log("Response received, parsing JSON...");
      const data = await res.json(); // wait for JSON parsing
      console.log("Data ready. First todo:", data[0]);
      return data;
    } catch (err) {
      console.error("Fetch failed:", err);
      return [];
    }
  }
  
  // Option 1: Using async IIFE (Immediately Invoked Function Expression)
  (async () => {
    const data = await loadTodos();
    console.log("All todos data:", data);
  })();

  // Option 2: Using .then() method
  // loadTodos().then(data => {
  //   console.log("All todos data:", data);
  // });
  