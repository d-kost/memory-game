export interface ICard {
  id: number
  removed: boolean
  icon: string
}

export default class Board {
  colCount: number

  constructor(colCount = 6) {
    this.colCount = colCount
  }

  static getUniqCount(colCount: number): number {
    return colCount ** 2 / 2
  }

  getUniqueCards(): ICard[] {
    const uniqCount: number = Board.getUniqCount(this.colCount)
    if (!Number.isInteger(uniqCount)) {
      return []
    }

    const result = []
    for (let i = 0; i < uniqCount; i++) {
      const card: ICard = {
        id: i,
        removed: false,
        icon: '',
      }
      result.push(card)
    }
    return result
  }

  getCards(): ICard[] {
    const cards = this.getUniqueCards()
    const result = [...cards, ...cards]
    result.sort(() => (Math.random() > 0.5 ? 1 : -1))
    return result
  }
}
