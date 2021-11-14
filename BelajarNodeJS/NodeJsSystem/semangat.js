console.log("Hello Word");

const nama = "Winanti Puspita Sari";
const cetakNama = (nama) => `Hi, nama saya ${nama}`;
const pi = 3.14;
const mahasiswa = {
  nama: "Taqiyyah Rahmah Azzahra",
  Umur: 5,
  cetakMhs() {
    return `Hallo, nama saya ${this.nama} dan umur saya ${this.Umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("Objek Orang sudah dibuat");
  }
}
// module.exports.cetakNama = cetakNama;
// module.exports.pi = pi;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   pi: pi,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

module.exports = { cetakNama, pi, mahasiswa, Orang };
