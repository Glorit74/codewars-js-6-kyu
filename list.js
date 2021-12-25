function list(names) {
  if (names.length === 0) return "";
  else {
    let res = [];
    for (const n of names) {
      res.push(n.name);
    }

    res.splice(res.length - 1, 0, "&"); // put & between last two
    console.log(res);
    let resString = "";
    for (let i = 0; i < res.length; i++) {
      if (res.length === 2 && res[i] !== "&") resString = res[i];
      else if (res[i] === "&" || i === res.length - 3)
        resString += `${res[i]} `;
      else if (i < res.length - 1) resString += `${res[i]}, `;
      else if (i === res.length - 1) resString += `${res[i]}`;
    }

    return resString;
  }
}
console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ])
);
console.log(list([]));
console.log(list([{ name: "Bart" }]));
