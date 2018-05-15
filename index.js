import axios from 'axios'
const { root } = program.refs

export const Root = {
  async dolar({ args }) {
    const result = await axios.get('https://s3.amazonaws.com/dolartoday/data.json');
    return result.data
  },
}
