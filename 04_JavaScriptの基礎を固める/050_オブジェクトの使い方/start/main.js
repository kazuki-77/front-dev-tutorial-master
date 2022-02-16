const person = {
  name: ['Code', 'Mafia'],
  age: [32, 34],
  gender: ['male', 'female'],
  interest: {
    sports: 'soccer',
    music: 'jpop'
  },
  getFullName: function() {
    console.log(this.name[0] + this.name[1])
  }
};
person.name.push('maria');
person.age.push(23);
console.log(person.name);
person.getFullName();

// this.nameは同じオブジェクト内のnameを探してくる