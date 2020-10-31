import compile from './helpers/compile'

jest.setTimeout(60_000)

describe('loader', () => {
  it('basic', async () => {
    const stats = await compile('photo.jpg', {
      componentX: 4,
      componentY: 3
    })
    const { modules } = stats.toJson()
    const output = modules?.[0].source

    expect(output)
      .toBe(`export default __webpack_public_path__ + "c46d46cf447041bca4413cc71eb4a939.jpg";
export const blurhash = "LJK]ui=f0kIn}?xtWAxHOHE2weE2";
`)
  })
})
