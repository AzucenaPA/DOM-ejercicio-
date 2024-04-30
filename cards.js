// Crear tarjeta con secciones: nombre, descripción, edad, lista
const CARD_CONTAINER = document.querySelector("#card-container") //obtengo el dato por su clase
/*const USER = {
    id: 1,
    username: "User Name",
    desc: "sobre mi",
    age: 26,
    fav_books: {
        books : [
            "bla bla", "blu blu", "ble ble"
        ]
    },
};*/
//la constante global de arriba es como un ojeto y despues de los : es una descripción de lo que va en esa variable

function createElement(){
    const cardObj = {
        name_section: document.createElement("h3"),
        desc_section : document.createElement("p"),
        age_section : document.createElement("p"),
        book_section : document.createElement("div"),
    };
    return cardObj;    
}
/*
    const card = document.createElement("div"); //se declaró el div pero no está implementado
    const name_section = document.createElement("h3");
    const desc_section = document.createElement("p");
    const age_section = document.createElement("p");
    const book_section = document.createElement("div");*/
//Esto automatiza escribir elementos en html para que desde la nube saque los datos para crear automáticamente tarjetas con esas características
//lista con los elementos de mi array de libros hecho funcion:

const booklist = user.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
})
console.log(booklist);

function injectData(obj, user) {
    const booklist = user.fav_books.books.map((e) => {
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
    });
    obj.name_section.textContent = user.username;
    obj.desc_section.textContent = user.desc;
    obj.age_section.textContent = user.age;
    obj.book_section.append(...booklist);
}

/*
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
*/

//book_section.append(...booklist); //eso significa spread

function renderCard(cardObj){
    const card = document.createElement("div");
    card.append(cardObj.name_section, cardObj.desc_section, cardObj.age_section, cardObj.book_section);
    card.className = "div-creado";
    CARD_CONTAINER.appendChild(card);
}
const USERS = [
    {
      id: 1,
      username: "booklover123",
      description: "Avid reader and coffee enthusiast.",
      age: 29,
      fav_books: {
        books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"]
      }
    },
    {
      id: 2,
      username: "literature_junkie",
      description: "Poetry lover and amateur writer.",
      age: 35,
      fav_books: {
        books: ["The Great Gatsby", "Invisible Man", "Beloved"]
      }
    }
  ];
  
USERS.forEach((user) => {
    const cardData = createElement();
    injectData(cardData, user);
});

//NOTA ME FALTA DEFINIR USERS DONDE INCLUYA LOS OTROS USUARIOS



//card.append(name_section, desc_section, age_section, book_section);

//inserta tarjeta en el container:
//console.log(card);
//CARD_CONTAINER.append(card);

