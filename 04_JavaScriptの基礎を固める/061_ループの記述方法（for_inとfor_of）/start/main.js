const arry = [1, 2, 3, 4, 5, 6];

for (let v of arry) {
    console.log(v);
}

// for~in は配列をループさせた場合は配列の番号(添字)が出力される
// console.log()の引数を(arry[i])とすることで配列の中の値が出力される
// console.log()の引数を(i, arry[i])とすることで両方を出力することができる

// for~of は配列をループさせた場合は配列の値が出力される
// of を使う場合は添字は使わないようにする