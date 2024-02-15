export default (arr) => {
  let bol = true;
  const newArr = arr.forEach((obj) => {
    if (obj.v) {
      console.log(obj.v);
    } else {
      console.log(obj.v);
    }
    // console.log(obj.v);
    // return bol ? obj.v : null;
  });
  return newArr;
};
