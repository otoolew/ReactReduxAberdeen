// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const VideoGamesAPI = {
    games: [
      { id:1, title: "Metal Gear", genre: "Stealth Action", rating: 5 },
      { id:2,title: "Octopath Traveler", genre: "JRPG", rating: 5 },
      { id:3,title: "Fallout", genre: "RPG", rating: 4 },
      { id:4,title: "Sky Rogue", genre: "Arcade Flight Sim", rating: 4 }
    ],
    all: function() { return this.games},
    get: function(id) {
      const isGame = g => g.number === id
      return this.games.find(isGame)
    }
  }
  
  export default VideoGamesAPI
  