function task1() {
  setTimeout(() => {
    console.log("task1 được thực thi");
    setTimeout(() => {
      console.log("task2 được thực thi");
      setTimeout(() => {
        console.log("task3 được thực thi ! ");
      }, 2000);
    }, 1500);
  }, 1000);
}
task1();
