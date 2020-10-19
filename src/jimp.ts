import configure from '@jimp/custom'
import gif from '@jimp/gif'
import jpeg from '@jimp/jpeg'
import png from '@jimp/png'

const Jimp = configure({
  types: [gif, jpeg, png]
})

export default Jimp
