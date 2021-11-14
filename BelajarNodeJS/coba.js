// // Syncronous
// const getUserSync = (id) => {
//   const nama = id === 1 ? "Shandika" : "Galih";
//   return { id, nama };
// }; //=require('./src/getUserSync');

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = "Hello Word";
// console.log(halo);

// Asyncronous
const getUser = (id, cb) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? "Shandika" : "Galih";
    cb({ id, nama });
  }, time);
}; //=require('./src/getUserSync');

const userSatu = getUser(1, (hasil) => {
  console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
  console.log(hasil);
});

const halo = "Hello Word";
console.log("selesai");
