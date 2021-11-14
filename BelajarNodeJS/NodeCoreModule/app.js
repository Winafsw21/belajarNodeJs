// pertama import core module
const fs = require("fs");
// const { text } = require("stream/consumers");

// menuliskan file secara syncronous
// try {
//   fs.writeFileSync("data/text.txt", "Menulis File secara Asynchronous");
// } catch (e) {
//   console.log(e);
// }

// menulis string secara asyncronous
// fs.writeFile("data/text.txt", "ayo berangkat ngaji", (err) => {
//   console.log(err);
// });

// membaca file secara syncronous
// const x = fs.readFileSync("data/text.txt", "utf-8");
// console.log(x);

// membaca filr secara asyncronous
// fs.readFile("data/text.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// membuat pertanyaan pada node.js
const readline = require("readline");
// const { json } = require("stream/consumers");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("masukkan nama :", (nama) => {
  rl.question("masukkan no.hp anda :", (noHp) => {
    // menyimpan ke file contact.json
    // pertama buat object
    const contact = { nama, noHp };
    const file = fs.readFileSync("./data/contact.json", { encoding: "utf8" });
    const contacts = JSON.parse(file);
    contacts.push(contact)
    fs.writeFileSync('./data/contact.json',JSON.stringify(contacts));
    console.log('Terima Kasih sudah memasukkan data')
    rl.close();

  });
});
