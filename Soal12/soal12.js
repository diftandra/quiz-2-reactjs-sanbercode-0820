class BangunDatar {
    constructor(nama){
        this._nama = nama;
    }

    set setNama(x){
        this._nama = x;
    }
    
    get getNama(){
        return this._nama;
    }

    luas(){
        return "";
    }

    keliling(){
        return "";
    }

}

class Lingkaran extends BangunDatar {
    constructor(nama, radius){
        super(nama);
        this._radius = radius;
    }

    set setRadius(x){
        this._radius = x;
    }

    get getRadius(){
        return this._radius;
    }

    luas(){
        let phi = 3.14;
        return phi*this._radius*this._radius;
    }

    keliling(){
        let phi = 3.14;
        return 2*phi*this._radius;
    }
}

class Persegi extends BangunDatar {
    constructor(nama, side){
        super(nama);
        this._side = side;
    }

    set setSide(x){
        this._side = x;
    }

    get getSide(){
        return this._side;
    }

    luas(){
        return this._side*this._side;
    }

    keliling(){
        return 4*this._side;
    }
}


let myBangunDatar = new BangunDatar()
myBangunDatar.setNama = "trapesium"
console.log("Nama: " +myBangunDatar._nama)
console.log("Luas: " + myBangunDatar.luas())
console.log("Keliling: " + myBangunDatar.keliling())

let persegi = new Persegi()
persegi.setNama = "persegi"
persegi.setSide = 10;
console.log("Nama: " +persegi.getNama)
console.log("Side "+persegi.getSide)
console.log("Luas: " + persegi.luas())
console.log("Keliling: " + persegi.keliling())

let lingkaran = new Lingkaran()
lingkaran.setNama = "lingkaran"
lingkaran.setRadius = 21;
console.log("Nama: " +lingkaran.getNama)
console.log("Radius "+lingkaran.getRadius)
console.log("Luas: " + lingkaran.luas())
console.log("Keliling: " + lingkaran.keliling())