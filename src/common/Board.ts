export interface ICard {
  id: number
  removed: boolean
}

export default class Board {
  rowCount: number

  constructor(rowCount: number = 6) {
    this.rowCount = rowCount
  }

  getUniqueCards(): ICard[] {
    let uniqCount: number = this.rowCount ** 2 / 2
    if (!Number.isInteger(uniqCount)) {
      return []
    }

    let result = []
    for (let i = 0; i < uniqCount; i++) {
      const card: ICard = {
        id: i,
        removed: false,
      }
      result.push(card)
    }
    return result
  }

  getCards(): ICard[] {
    let cards = this.getUniqueCards()
    let result = [...cards, ...cards]
    result.sort(() => (Math.random() > 0.5 ? 1 : -1))
    return result
  }
}
