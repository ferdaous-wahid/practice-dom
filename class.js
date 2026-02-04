class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.country = "Bangladsh";
    // console.log("calling the  constructor method from", name);
  }
  goal() {
    console.log("first");
  }
  getTeamName() {
    return "Alice";
  }
}

const player1 = new Player("Ferdaous", 22);
const player2 = new Player("Wahid");
// player1.goal();
console.log(player1 instanceof Player);
