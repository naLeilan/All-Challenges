const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function PackingList() {
  const list = people.map((person) => <li>{person}</li>);
  return <ul>{list}</ul>;
}

export default PackingList;
