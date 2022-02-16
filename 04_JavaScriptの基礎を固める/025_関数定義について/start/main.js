//　無名関数・・・関数名がない持たない関数
function(name, age) {
  // let name = 'Code Mafia';
  console.log('hello ' + name + age);
  return name + age; //　戻り値
}



hello('itou', 20);
hello('satou', 15);
const returnVal = hello('katou', 29);
console.log(returnVal); // returnの nameとageが出力される

