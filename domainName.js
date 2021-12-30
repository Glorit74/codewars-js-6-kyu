function domainName(url) {
  let start = '';
  let res = '';
  if (url[0] === 'w') {
    start = url.slice(4, url.length);
    return end(start);
  } else if (url[4] === 's') {
    start = url.slice(8, url.length);
    return end(start);
  } else if (url[0] === 'h' && url[11] === 'w') {
    start = url.slice(11, url.length);
    return end(start);
  } else if (url[0] === 'h') {
    start = url.slice(7, url.length);
    return end(start);
  }
}
const end = (start) => {
  let point = 0;
  point = start.indexOf('.');
  return start.slice(0, point);
};
// console.log(domainName('http://google.com'));
// console.log(domainName('http://google.co.jp'));
// console.log(domainName('https://youtube.com'));
// console.log(domainName('www.xakep.ru'));
// console.log(domainName('https://ebjmxjh8isfofnmfyva7u.us/'));
// console.log(domainName('http://cnxfiaqo4bc3k1abi0obxg6.org/index.php'));

function domainName2(url) {
  return url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0];
}

console.log(domainName2('http://google.com'));
console.log(domainName2('http://google.co.jp'));
console.log(domainName2('https://youtube.com'));
console.log(domainName2('www.xakep.ru'));
console.log(domainName2('https://ebjmxjh8isfofnmfyva7u.us/'));
console.log(domainName2('http://cnxfiaqo4bc3k1abi0obxg6.org/index.php'));
