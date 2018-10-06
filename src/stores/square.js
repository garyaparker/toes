import { observable, action } from 'mobx';

export default class Square {
  @observable image = null;
  @observable selectedBy = null;

  constructor(id) {
    this.id = id;
  }

  @action
  select(player) {
    this.selectedBy = player;
  }

  @action
  clear() {
    this.image = null;
    this.selectedBy = null;
  }
}
