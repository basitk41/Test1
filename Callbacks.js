const m1 = (callback) => {
  setTimeout(() => {
    console.log("1");
    callback();
  }, 2000);
};

const m2 = () => {
  setTimeout(() => {
    console.log("2");
  }, 1000);
};

m1(m2);
