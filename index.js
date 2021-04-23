class Draw {

    gambarKotak(x) {
        console.log("GAMBAR KOTAK")
        let hasil = ''
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < x; j++) {
                hasil += '*';

            }
            hasil += '\n';
        }
        console.log(hasil);
    }

    gambarSegitiga(x) {
        console.log("GAMBAR SEGITIGA")
        let hasil = ''
        for (let i = 0; i < x; i++) {
            for (let j = 0; j <= i; j++) {
                hasil += '*';

            }
            hasil += '\n';
        }
        console.log(hasil);
    }

    gambarSegitigaTerbalik(x) {
        console.log("SEGITIGA TERBALIK");
        let hasil = '';
        for (let i = 0; i < x; i++) {
            for (let j = i; j < x; j++) {
                hasil += '*';

            }
            hasil += '\n';
        }
        console.log(hasil);
    }

    gambarSelangSeling(x) {
        console.log("GAMBAR SELANG SELING")
        let hasil = ''
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < x; j++) {
                if (j % 2 === 0) {
                    hasil += '!';
                } else {
                    hasil += '*';
                }
            }
            hasil += '\n';
        }
        console.log(hasil);
    }

    gambarPola(x) {
        console.log('GAMBAR POLA')
        let hasil = '';
        for (let i = 1; i < x; i++) {
            for (let j = 1; j < x; j++) {
                if (i % 2 !== 0 && j === 3) {
                    hasil += '!';
                } else if (i % 2 === 0 && j === 2) {
                    hasil += '!';
                }
                hasil += '*';

            }
            hasil += '\n';
        }
        console.log(hasil);
    }
}

let bintang = new Draw;
bintang.gambarKotak(5);
bintang.gambarSegitiga(5);
bintang.gambarSegitigaTerbalik(5);
bintang.gambarSelangSeling(5);
bintang.gambarPola(5);