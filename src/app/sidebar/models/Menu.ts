import { MenuItem } from './MenuItem'

export class Menu {
  public items: MenuItem[]

  constructor(items) {
    this.items = items
  }

  find(path) {
    return this.items.find(item => path.includes(item.link))
  }
}
