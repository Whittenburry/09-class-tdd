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

//-------------------------------------------------

class Lion extends Cat {
  constructor(size) {
    super();
    this.size = 'BIG';
  }
}

//--------------------------------------------------

class KeepSecret {
  constructor(secret) {
    this.squeal = function () {
      return secret;
    }
  }
}

//---------------------------------------------------

class Key {

}

class Safe {
  constructor(secret, key) {
    this.unlock = function (lockpick) {
      if (lockpick == key) {
        return secret
      }
    }
  }
}
