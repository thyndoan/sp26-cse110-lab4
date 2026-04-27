setInterval(() => {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}, 1000); //Set interval will execute everything inside every 1000 miliseconds (1 second)
