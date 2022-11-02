
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre: "Crash Bandicoot",
        precio: 200,
        img: "https://www.mobygames.com/images/covers/l/86029-crash-bandicoot-playstation-front-cover.jpg",
    },
    {
        id: 2,
        nombre: "Resident Evil 4",
        precio: 500,
        img: "https://www.mobygames.com/images/covers/l/71525-resident-evil-4-playstation-2-front-cover.jpg",
    },
    {
        id: 3,
        nombre: "Grand Theft Auto San Andreas",
        precio: 450,
        img: "https://www.mobygames.com/images/covers/l/43133-grand-theft-auto-san-andreas-playstation-2-front-cover.jpg",
    },
    {
        id: 4,
        nombre: "Tomb Raider",
        precio: 200,
        img: "https://www.mobygames.com/images/covers/l/22048-tomb-raider-iii-adventures-of-lara-croft-playstation-front-cover.jpg",
    },

    {
        id: 5,
        nombre: "Spider-Man",
        precio: 250,
        img: "https://www.mobygames.com/images/covers/l/12193-spider-man-playstation-front-cover.jpg",
    },

    {
        id: 6,
        nombre: "Dino Crysis 2",
        precio: 250,
        img: "https://d29xot63vimef3.cloudfront.net/image/playstation-games/200-1.jpg",
    },

    {
        id: 7,
        nombre: "Persona",
        precio: 400,
        img: "https://m.media-amazon.com/images/I/51GYSIjaXAL._AC_.jpg",
    },

    {
        id: 8,
        nombre: "Need For Speed: Most Wanted",
        precio: 100,
        img: "https://images.cdn.circlesix.co/image/1/640/0/uploads/posts/2016/11/52e227c79aba0e7093c8a5d2a1cbd3b3.jpg",
    },

    {
        id: 9,
        nombre: "God Of War",
        precio: 500,
        img: "https://i.pinimg.com/originals/dd/0f/ab/dd0fab8f66e95ffeedde1523318e540c.jpg",
    },

    {
        id: 10,
        nombre: "Black",
        precio: 350,
        img: "https://www.mobygames.com/images/covers/l/59111-black-playstation-2-front-cover.jpg",
    },

    {
        id: 11,
        nombre: "Grand Theft Auto Vice City",
        precio: 600,
        img: "https://www.shortlist.com/media/images/2019/05/50-greatest-video-game-covers-160-1556729296-IDis-column-width-inline.jpg",
    },

    {
        id: 12,
        nombre: "Call Of Duty World At War",
        precio: 150,
        img: "https://www.mobygames.com/images/covers/l/133758-call-of-duty-world-at-war-final-fronts-playstation-2-front-cover.png",
    },

    {
        id: 13,
        nombre: "The Punisher",
        precio: 370,
        img: "https://i.pinimg.com/236x/88/5c/09/885c09fc9946f0b5c76b865c34a34381--playstation--the-punisher.jpg",
    },

    {
        id: 14,
        nombre: "Resident Evil 2",
        precio: 550,
        img: "https://upload.wikimedia.org/wikipedia/en/4/40/NTSC_Resident_Evil_2_Cover.png",
    },

    {
        id: 15,
        nombre: "Resident Evil 3: Nemesis",
        precio: 520,
        img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Resident_Evil_3_Cover.jpg",
    },

];



let carrito = [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class"price">${product.precio} $<p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,

        })
        console.log(carrito);
    });

});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader"
    modalHeader.innerHTML = `
        <h1 class= "modal-header-tittle">Carrito</h1>
    `;

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () =>{
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $<p>
        `;

        modalContainer.append(carritoContent);
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);

});



localStorage.setItem("carrito", JSON.stringify(carrito));
