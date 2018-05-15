const { root } = program.refs

export const Root = {
  async Dolar({ args }) {
    const result = await axios.get('https://s3.amazonaws.com/dolartoday/data.json');
    return result.data
  },
}
