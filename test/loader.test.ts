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
      .toBe(`export default __webpack_public_path__ + "0c3691f0fa0663c51ad3b10707f7dd71.jpg";
export const blurhash = "LJK,A.=f0kIn}?xtWAxHOaE2sBE2";
`)
  })
})
