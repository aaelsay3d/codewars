class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt(){
    let crewWeight = (this.crew * 1.5);
    this.draft -= crewWeight;
    return this.draft > 20;
  } 
}
