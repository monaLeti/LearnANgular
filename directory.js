angular.module('directoryApp', ['ngAnimate'])
  .controller('directoryController', function(){
    var dirList = this;
    dirList.toggle = false;

    dirList.list = [{name: 'Scott', age: 29, img:'3.jpg'},
      {name: 'Leti', age:30, img:'1.jpg'},
      {name: 'Laura', age:13, img:'2.jpg'},
      {name: 'Paco', age:33, img:'3.jpg'}];

      dirList.addPerson = function (){
        dirList.list.push({name: dirList.name, age: dirList.age})
        dirList.name='';
        dirList.age = 0;
      };
  });
