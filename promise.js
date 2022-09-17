const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (cariHasilFilm) => {
  try {
    //inisialisasi array untuk hasil pencarian
    let hasil1 = [];
    let hasil2 = [];
    let hasilSemua = [];

    //mengambil data
    const promise1 = await promiseTheaterIXX()
      //pengecekan value objek dengan parameter
    for (let i=0; i < promise1.length; i++) {
      if (promise1[i].hasil === cariHasilFilm){
        hasil1.push(promise1[i])
      }
    }

    const promise2 = await promiseTheaterVGC()
      //pengecekan value objek dengan parameter
    for (let i=0; i < promise2.length; i++) {
      if (promise2[i].hasil === cariHasilFilm){
        hasil2.push(promise2[i])
      }
    }

    //penggabungan 2 array hasil looping
    hasilSemua = [...hasil1, ...hasil2]
    //mengembalikan nilai jumlah array dari hasil penggabungan
    return hasilSemua.length

  } catch (err) {
    console.log(err)
  }
  
};

module.exports = {
  promiseOutput,
};
