const cardArray = [
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    }
]

cardArray.sort(()=> 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')
let cardChoosen = [];
let cardChoosenIds = [];
const cardsWon = [];



function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
       const card = document.createElement('img');
       card.setAttribute('src', 'images/blank.png');
       card.setAttribute('data-id', i);
       card.addEventListener('click', flipCard)
       gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch(){

    const cards = document.querySelectorAll('img')
    const optionOneId = cardChoosenIds[0];
    const optionTwoId = cardChoosenIds[1];


    // console.log(cards)
    // console.log('check for match')
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        alert('You have clicked on same image!')
        
    }
    
    if(cardChoosen[0] == cardChoosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardChoosen)
    }
    else{
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length;
    cardChoosen = [];
    cardChoosenIds = [];

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = "Congratulations You Found them all!"
    }
}



function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name)
    cardChoosenIds.push(cardId)
    // console.log(cardChoosen)
    // console.log(cardChoosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChoosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}