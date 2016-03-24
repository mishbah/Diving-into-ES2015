export default class Car {
  constructor(make) {
    this._make = make
  }

  get make() {
    return this._make
  }

  set make(newMake) {
    this._make = newMake
  }
}
