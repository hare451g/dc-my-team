// available crews
const crews = [
  {
    name: 'bill mahoney',
    role: 'Product Owner',
    photo: './public/images/photo1.png',
  },
  {
    name: 'Saba cabrera',
    role: 'art director',
    photo: './public/images/photo2.png',
  },
  {
    name: 'shae lee',
    role: 'tech lead',
    photo: './public/images/photo3.png',
  },
  {
    name: 'skylah lu',
    role: 'ux designer',
    photo: './public/images/photo4.png',
  },
  {
    name: 'griff richard',
    role: 'developer',
    photo: './public/images/photo5.png',
  },
  {
    name: 'stan john',
    role: 'developer',
    photo: './public/images/photo6.png',
  },
];

function createCard(crew) {
  const { name, photo, role } = crew;

  return `
    <div class="card">
      <div class="crew">
        <figure>
          <img src="${photo}" alt="${name} photo" />
          <figcaption>
            <p class="name">${name}</p>
          </figcaption>
        </figure>
        <p class="role">${role}</p>
      </div>
    </div>
  `;
}

function createDeck(crews = []) {
  const deckElement = document.getElementById('deck');
  const deck = crews.map(createCard).join('');
  deckElement.innerHTML = deck;
}

createDeck(crews);
