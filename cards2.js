const CARDS_CONTAINER = document.querySelector("#card-container");
//returns the first Element within the document that matches the specified selector, or group of selectors.

// const que guarda los usuarios como objetos pq contienen diferentes atributos
const USERS = [
    {
      id: 1,
      username: "booklover123",
      description: "Avid reader and coffee enthusiast.",
      age: 29,
      fav_books: {
        books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"],
      },
    },
    {
      id: 2,
      username: "literature_junkie",
      description: "Poetry lover and amateur writer.",
      age: 35,
      fav_books: {
        books: ["The Great Gatsby", "Invisible Man", "Beloved"],
      },
    },
  ];