'use strict'

class Foo {

}

var bar = new Foo;

class Dog {
  constructor(says) {
    this.says = 'life is ruff';
  }
};

class Cat {
  growl() {
    return 'meow';
  }
};

var garfield = new Cat;

class FacelessMan {
  constructor(name) {
    this.name = name;
  }
}

var aMan = new FacelessMan(`Jaqen H'ghar`);


// var aMan = new FacelessMan;
