let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis:"john doe",
    tahunTerbit:2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

buku.warnaSampul = [...warna, ...buku.warnaSampul];
buku = {...buku, ...dataBukuTambahan}
console.log(buku)