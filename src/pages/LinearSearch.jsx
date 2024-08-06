function LinearSearch() {
  const Search = (value, list) => {
    let index = 0;
    let position = -1;
    let found = false;

    while (!found && index < list.length) {
      if (list[index] === value) {
        found = true;
        position = index;
      } else {
        index++;
      }
    }

    return position;
  };

  const result = Search(4, [1, 4, 5, 8]);

  return (
    <div>
      <h3>Linear Search</h3>
      <p>Position of 4: {result}</p>
    </div>
  );
}

export default LinearSearch;
