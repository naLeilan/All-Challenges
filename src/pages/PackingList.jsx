/************/
//Filtering arrays of items
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

export default function DisplayList() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const list = chemists.map((l) => <li key={l.id}>{l.name} </li>);

  return <ul>{list}</ul>;
}

/************/
//using map()
// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// export default function PackingList() {
//   const list = people.map((person) => <li>{person}</li>);
//   return <ul>{list}</ul>;
// }
//end of map()
/************/
