let tasks = [
    {id: 101, status: "Pending"},
    {id: 102, status: "Completed"}
  ];
  
  function fetchTasks() {
    return new Promise(resolve => {
      setTimeout(() => resolve(tasks), 1500);
    });
  }
  
  async function showTasks() {
    console.log("Fetching tasks...");
    let allTasks = await fetchTasks();
    allTasks.forEach(t => console.log(`Task ${t.id}: ${t.status}`));
  }
  
  showTasks();
  

