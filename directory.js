angular.module('directoryApp', [])
  .controller('directoryController', function(){
    var dirList = this;
    dirList.toggle = false;

    dirList.list = [{name: 'Scott', age: 29},
      {name: 'Leti', age:30},
      {name: 'Laura', age:13},
      {name: 'Paco', age:33}];

      dirList.addPerson = function (){
        dirList.list.push({name: dirList.name, age: dirList.age})
        dirList.name='';
        dirList.age = 0;
      };
  });
