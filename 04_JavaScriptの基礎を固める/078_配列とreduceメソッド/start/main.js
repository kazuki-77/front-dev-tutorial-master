const arry = [1,2,3,4,5];
// reduceメソッド・・・配列の中身を足し合わせたり、文字列として結合するときに使う
// accu・・・accumulationの略。蓄積という意味。
arry.reduce(
  function(accu, curr){
    console.log(accu, curr);
    return accu + curr; // 前のループの足し算
}, 10);

const str = 'animation';
const strArry = str.split('');

console.log(strArry);

const result = strArry.reduce((accu, curr) => {
  
  return `${accu}<${curr}>`;
}, "");

console.log(result)