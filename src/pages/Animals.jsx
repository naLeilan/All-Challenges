function AnimalsList() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        <List animals={animals} />
      </ul>
    </div>
  );
}

function List({ animals }) {
  return (
    <div>
      {animals.map((animal) => {
        return <ListItem animal={animal} key={animal} />;
      })}
    </div>
  );
}

function ListItem({ animal }) {
  return <li>{animal} </li>;
}

export default AnimalsList;
