function BinarySearch() {
  const search = (value, list) => {
    let found = false;
    let position = -1;
    let first = 0;
    let last = list.length - 1;

    while (found === false && first <= last) {
      const middle = Math.floor((first + last) / 2);
      console.log(middle);

      if (list[middle] === value) {
        position = middle;
        found = true;
      } else if (list[middle] > value) {
        last = middle - 1;
      } else {
        first = middle + 1;
      }
    }
    return position;
  };

  const result = search(3, [4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div>
      <h3>BinarySearch</h3>
      <h4>3 has {result} position </h4>
    </div>
  );
}

export default BinarySearch;
