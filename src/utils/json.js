// TODO: add try..catch to both functions

const decode = (key) => JSON.parse(localStorage.getItem(key));
const encode = (key, data) => JSON.stringify(localStorage.setItem(key, data));

const json = { encode, decode };

export default json;
