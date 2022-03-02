const arry = [1,2,3,4,5];
// forEachメソッドの第一引数には配列の値(今回は１〜５の数字)が入る
// 第二引数には添字(index 0から数える数字)が入る
// 第三引数には配列がそのまま渡る
arry.forEach((val,i, ary) => {
  console.log(val)
})

for(let i = 0; i < arry.length; i++) {
  const v = arry[i];
  console.log(v);
}