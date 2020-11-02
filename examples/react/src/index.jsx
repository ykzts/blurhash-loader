import ReactDOM from 'react-dom'
import App from './App'

/**
 * @param {import('react').ReactElement[]} element
 * @param {Element} container
 * @return {Promise<void>}
 */
function render(element, container) {
  return new Promise((resolve, reject) => {
    try {
      ReactDOM.render(element, container, resolve)
    } catch (error) {
      reject(error)
    }
  })
}

async function main() {
  const container = document.getElementById('app')

  await render(<App />, container)
}

main().catch((error) => console.error(error))
