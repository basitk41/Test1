const test1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ msg: "Success 1" });
    // reject({ msg: "Error 1" });
  }, 2000);
});
const test2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ msg: "Success 2" });
    // reject({ msg: "Error 2" });
  }, 1000);
});

// test
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getResult = async () => {
  try {
    const res = await Promise.allSettled([test1, test2]);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

getResult();
