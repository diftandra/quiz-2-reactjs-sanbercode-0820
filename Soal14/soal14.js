const volumeCuboid = (...data) => {
    if (data.length != 3) {
        return "Wrong parameter"
    } else {
        let panjang = data[0]
        let wide = data[1]
        let height = data[2]
        return panjang * wide * height
    }
}

const volumeCube = (...data) => {
    if (data.length != 1) {
        return "Wrong parameter"
    } else {
        let side = data[0]
        return side * side * side
    }
}

let cuboidVolumeResult = volumeCuboid(5, 8, 10)
let cubeVolumeResult = volumeCube(7)
let result = `Cuboid Result: ${cuboidVolumeResult} and Cube Result : ${cubeVolumeResult}`
console.log(result)