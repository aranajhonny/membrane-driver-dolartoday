import axios from 'axios';
const { root } = program.refs;

export const Root = {
  async dolar({ args }) {
    const result = await axios.get(
      'https://s3.amazonaws.com/dolartoday/data.json'
    );
    return {
      dolartoday: result.data.USD.dolartoday,
      bitcoin: result.data.USD.bitcoin_ref,
    };
  },
};
