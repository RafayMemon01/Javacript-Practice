let studentNames = [
    "John",
    "Jane",
    "Bob",
    "Alice",
    "Mike",
    "Sarah",
    "Tom",
    "Emily",
    "David",
    "Jessica"
  ];
  
  let houses = [];
  
  for (const name of studentNames) {
    if (name.length < 6) {
      houses.push("Gryffindor");
    } else if (name.length < 8) {
      houses.push("Hufflepuff");
    } else if (name.length < 12) { 
      houses.push("Ravenclaw");
    } else {
      houses.push("Slytherin");
    }
  }
  
  console.log(houses);
  

  //Output

 /* [
    'Gryffindor', 'Gryffindor',
    'Gryffindor', 'Gryffindor',
    'Gryffindor', 'Gryffindor',
    'Gryffindor', 'Gryffindor',
    'Gryffindor', 'Hufflepuff'
  ] */