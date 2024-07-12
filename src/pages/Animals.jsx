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
    <>
      {animals && (
        <div>
          {animals.map((animal) => {
            return animal.startsWith("L") ? (
              <ListItem animal={animal} key={animal} />
            ) : null;
          })}
        </div>
      )}
    </>
  );
}

function ListItem({ animal }) {
  return <li>{animal} </li>;
}

export default AnimalsList;
