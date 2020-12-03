const team = {
  _players: [
    {firstName: 'Pete',lastName: 'Wheeler',age: 54},
    {firstName: 'Jeans',lastName: 'Pepe',age: 34},
    {firstName: 'Raphael',lastName: 'Nadal',age: 36}
  ],
  _games: [{opponent: 'Broncos',teamPoints: 42,
  opponentPoints: 27}
],

get players(){
  return {
    palyers: this._players,
    
  };
},
get games(){
  return {
        games: this._games,
  }
},


addPlayer: function(firstName,lastName,age){
  let player = {
    firstName : firstName,
    lastName: lastName,
    age: age
  };
  
  return this._players.push(player)
},
addGame: function(OppName,
  Points,
  OppoPoints){
    let game = {
      opponent:OppName,
      teamPoints: Points,
      opponentPoints: OppoPoints
    }
    return this._games.push(game);
  
}
}




//console.log(team.players);
//console.log(team.games);
team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)
//console.log(team.players);
team.addGame('Titans', 100, 98);

team.addGame('Tigers', 67, 50);
team.addGame('Widady', 36, 29);
console.log(team.games);
