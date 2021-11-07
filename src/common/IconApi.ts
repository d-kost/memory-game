export default class IconApi {
  static loadIcons(count: number): Promise<{ default: string }[]> {
    let iconIds: number[] = Array.from(Array(count).keys())
    return Promise.all(
      iconIds.map((item) => import(`../../assets/icons/${item}.svg`))
    )
  }
}
