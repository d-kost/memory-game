export type Card = {
  key: number
  removed: boolean
}

export default class Board {
  rowCount: number

  constructor(rowCount: number = 6) {
    this.rowCount = rowCount
  }

  getCards(): Card[] {
    let uniqCount: number = this.rowCount ** 2 / 2
    if (!Number.isInteger(uniqCount)) {
      return []
    }
    console.log(uniqCount)
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
}
