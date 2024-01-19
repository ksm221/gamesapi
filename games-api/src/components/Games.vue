<template>
  <div>
    <h2>Games</h2>
    <ul>
      <li v-for="game in games" :key="game.id">
        {{ game.name }} - {{ game.price }}
        <button @click="getGame(game.id)">View</button>
        <button @click="deleteGame(game.id)">Delete</button>
      </li>
    </ul>

    <form @submit.prevent="createNewGame">
      <label for="newGameName">Name:</label>
      <input v-model="newGameName" id="newGameName" required>

      <label for="newGamePrice">Price:</label>
      <input v-model="newGamePrice" id="newGamePrice" required>

      <button type="submit">Create New Game</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      games: [],
      newGameName: '',
      newGamePrice: '',
    };
  },
  mounted() {
    this.getAllGames();
  },
  methods: {
    getAllGames() {
      axios.get('http://localhost:8080/games')
        .then(response => {
          this.games = response.data;
        })
        .catch(error => {
          console.error('Error fetching games:', error);
        });
    },
    getGame(id) {
      // Make a request to get a specific game by ID
      // Update a "selectedGame" variable or open a modal
    },
    deleteGame(id) {
      axios.delete(`http://localhost:8080/games/${id}`)
        .then(response => {
          console.log('Game deleted:', response);
          this.getAllGames(); // Refresh the game list
        })
        .catch(error => {
          console.error('Error deleting game:', error);
        });
    },
    createNewGame() {
      axios.post('http://localhost:8080/games', {
        name: this.newGameName,
        price: this.newGamePrice,
      })
        .then(response => {
          console.log('Game created:', response);
          this.getAllGames(); // Refresh the game list
          this.newGameName = ''; // Clear input fields
          this.newGamePrice = '';
        })
        .catch(error => {
          console.error('Error creating game:', error);
        });
    },

  },
};
</script>

<style scoped>

</style>
