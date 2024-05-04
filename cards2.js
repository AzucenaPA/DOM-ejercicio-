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

 //Función para crear secciones dentro de la card
 function createElements() {
    const cardObj = {
      name_section: document.createElement("h3"),
      desc_section: document.createElement("p"),
      age_section: document.createElement("p"),
      book_section: document.createElement("div"),
    };
    return cardObj;
  };

  //ojo declaramos las secciones pero aún no se implementan. Se crean las secciones dentro de un objeto.

  //Inyectar info a las tarjetas
  function injectData(obj, user) {
    const bookList = user.fav_books.books.map((e) => {
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
    });
    obj.name_section.textContent = user.username;
    obj.desc_section.textContent = user.desc;
    obj.age_section.textContent = user.age;
    obj.book_section.append(...bookList);
    renderCard(obj);
    };
    
  //map crea elementos con etiqueta ul
 