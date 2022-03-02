const num = 0;
const bool = Boolean(num); 
console.log(bool);

if (!num) {
  console.log('this is true');
} else {
  console.log('this is false');
}
// const num = Number(true)
// console.log(num);
// 
// if ( 1 == '1' || 1 === '1') {
//   console.log('this is true');
// } else {
//   console.log('this is false');
// }
// 
// 
// 
// if(1 == '1') {
//   console.log('this is true');
// } else {
//    console.log('this is false');
// }
// 結果は　'this is true' が返ってくる
//
// if(1 === '1') {
//   console.log('this is true');
// } else {
//    console.log('this is false');
// }
// 結果は　'this is false' が返ってくる
//
// 1 == '1'　はデータ型までは比較をしないため、「true」になる
// 1 === '1' はデータ型まで比較をするため、int型とstr型のため、「false」になる
