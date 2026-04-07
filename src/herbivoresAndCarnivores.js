'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    const idx = Animal.alive.indexOf(this);

    if (idx !== -1) {
      Animal.alive.splice(idx, 1);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }
    target.health -= 50;

    if (target.health <= 0) {
      target.die();
    }
  }
}

module.exports = { Animal, Herbivore, Carnivore };
