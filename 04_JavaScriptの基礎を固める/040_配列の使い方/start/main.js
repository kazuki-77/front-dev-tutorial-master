const arry = [1,2,3,4,5,6, 'moji', false];
arry[8] = 8;
arry.push('new item'); //pushで末尾に配列に追加できる
arry.unshift('add item'); //unshiftで配列の先頭に追加できる
const val = arry.pop(); // 配列の一番最後の要素を削除する
const val2 = arry.pop(); // 上のpopで最後の要素は削除されているので、最後から2番目の要素を取り出し、val2に格納する
console.log(val2); // lengthをつけることで入れるの数を数える

// shift()は先頭を要素を削除する
// 上記だとunshiftで先頭に追加した'add item'が削除される