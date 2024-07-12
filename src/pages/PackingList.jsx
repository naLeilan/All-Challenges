/*Challenge 3 of 3: Refactor a series of ? : to if and variables 
This Drink component uses a series of ? : conditions 
to show different information depending on whether
 the name prop is "tea" or "coffee". The problem 
 is that the information about each drink is spread
  across multiple conditions. Refactor this code to
   use a single if statement instead of three ? : conditions.
*/
function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>

        <dd>{name === "tea" ? "leaf" : "bean"}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === "tea" ? "15–70 mg/cup" : "80–185 mg/cup"}</dd>
        <dt>Age</dt>
        <dd>{name === "tea" ? "4,000+ years" : "1,000+ years"}</dd>
      </dl>
    </section>
  );
}

function Drinks({ name }) {
  let part, caffeine, age;
  if (name === "tea") {
    part = "leaf";
    caffeine = "15–70 mg/cup";
    age = "4,000+ years";
  } else {
    part = "bean";
    caffeine = "80–185 mg/cup";
    age = "1,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>part of plant</dt>
        <dd>{name}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drinks name="tea" />
      <Drinks name="coffee" />
    </div>
  );
}

// function Item({ name, isPacked }) {
//   // if (isPacked) {
//   //   return <li className="item">{name}✔</li>;
//   // } else {
//   //   return <li className="item">{name}</li>;
//   // }

//   //Conditional (ternary) operator
//   // return <li>{isPacked ? name + "✔" : name}</li>;

//   //more nesting
//   // return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;

//   //using &&
//   return (
//     <li className="item">
//       {name} {isPacked && "✔"}
//     </li>
//   );
// }

// export default PackingList;
