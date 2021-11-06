export type Card = {
  key: number
  removed: boolean
}

export default class Board {
  rowCount: number

  constructor(rowCount: number = 6) {
    this.rowCount = rowCount
  }

  getUniqueCards(): Card[] {
    let uniqCount: number = this.rowCount ** 2 / 2
    if (!Number.isInteger(uniqCount)) {
      return []
    }

    let result = []
    for (let i = 0; i < uniqCount; i++) {
      const card: Card = {
        key: i,
        removed: false,
      }
      result.push(card)
    }
    return result
  }

  getCards(): Card[] {
    let cards = this.getUniqueCards()
    let result = [...cards, ...cards]
    result.sort(() => (Math.random() > 0.5 ? 1 : -1))
    return result
  }
}
