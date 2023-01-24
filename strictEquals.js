function strictEquals(a, b) {
  let result;
  if (Number.isNaN(a) && Number.isNaN(b)) {
    result = false;
  } else if (Object.is(a, -0) || Object.is(b, -0)) {
    result = true;
  } else if (Object.is(a, b)) result = true;
  else {
    result = false;
  }
  console.log(result);
  return result;
}

export default strictEquals;
