function hello(callback, lastname) {
  console.log(callback);
  console.log('hello ' + callback(lastname));
}

function getName() {
  return 'Code Mafia';
}

const getFirstName = function() {
  return 'Code';
}

hello(function(name) {
  return 'Code ' + name;
}, 'Mafia');

// 関数名の末尾に()をつけると、関数を実行するという意味になる