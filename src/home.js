
const displayPizza = document.querySelector('.display-pizza');


const showPizza = (value) => {
  value.forEach((dat) => {
    const divContainer = document.createElement('div');
    divContainer.className = 'pizza-container';
    const image = document.createElement('img');
    image.alt = 'pizza-image';
    image.src = dat.image_url;

    const namePub = document.createElement('span');
    namePub.innerHTML = dat.publisher;

    const namePizz = document.createElement('span');
    namePizz.innerHTML = dat.title;

    const commentBtn = document.createElement('button');
    commentBtn.innerHTML = 'Comment';

    const reservationBtn = document.createElement('button');
    reservationBtn.innerHTML = 'Reservation';

    divContainer.appendChild(image);
    divContainer.appendChild(namePub);
    divContainer.appendChild(namePizz);
    divContainer.appendChild(commentBtn);
    divContainer.appendChild(reservationBtn);

    displayPizza.appendChild(divContainer);
  });
};


export default showPizza;
