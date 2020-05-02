document.addEventListener('DOMContentLoaded', () => {

  /*************************************************************************
   *          INITIAL STATE
   ************************************************************************/
  const board  = document.querySelector('.board');
  const result = document.querySelector('#result');

  const cardsArray = [
      {
          name: 'cheeseburger',
          image: 'images/cheeseburger.png'
      },
      {
          name: 'cheeseburger',
          image: 'images/cheeseburger.png'
      },
      {
          name: 'fries',
          image: 'images/fries.png'
      },
      {
          name: 'fries',
          image: 'images/fries.png'
      },
      {
          name: 'hotdog',
          image: 'images/hotdog.png'
      },
      {
          name: 'hotdog',
          image: 'images/hotdog.png'
      },
      {
          name: 'ice-cream',
          image: 'images/ice-cream.png'
      },
      {
          name: 'ice-cream',
          image: 'images/ice-cream.png'
      },
      {
          name: 'milkshake',
          image: 'images/milkshake.png'
      },
      {
          name: 'milkshake',
          image: 'images/milkshake.png'
      },
      {
          name: 'pizza',
          image: 'images/pizza.png'
      },
      {
          name: 'pizza',
          image: 'images/pizza.png'
      },
  ];

  let cardsChosen   = [];
  let cardsChosenId = [];
  let cardsWon      = [];
  let score         = 0;
  displayResult(score)
  createBoard(cardsArray, board);

  // randomize the cards



  /*************************************************************************
   *          HELPERS
   ************************************************************************/

  /**
   *  Flip the card
   ******************************************/
  function displayResult(points) {
      result.textContent = points;
  }

  /**
   *  Create board
   ******************************************/
  function createBoard(cards, board) {
      for (let i = 0; i < cards.length; i++) {
          const blankCard = document.createElement('img');
          blankCard.setAttribute('src', 'images/blank.png');
          blankCard.setAttribute('data-id', i);
          blankCard.addEventListener('click', flipCard);
          board.appendChild(blankCard);
      }
  }

  /**
   *  Checks for matches
   ******************************************/
  function checkMatches() {
      const cards = document.querySelectorAll('img');
      const optionOne   = cardsChosen[0];
      const optionTwo   = cardsChosen[1];
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1]
      if (optionOne === optionTwo) {
          alert('You found a match!');
          cards[optionOneId].setAttribute('src', 'images/white.png');
          cards[optionTwoId].setAttribute('src', 'images/white.png');
          cardsWon.push(cardsChosen);
          score++;
      } else {
          alert('Try again');
          cards[optionOneId].setAttribute('src', 'images/blank.png');
          cards[optionTwoId].setAttribute('src', 'images/blank.png');
      }
      cardsChosen   = [];
      cardsChosenId = [];
      if (cardsWon.length === cardsArray.length / 2) {
          score = 'Congratulations!';
      }
      displayResult(score);
  }

  /**
   *  Flip the card
   ******************************************/
  function flipCard(e) {
      const cardId = e.target.getAttribute('data-id');
      cardsChosen.push(cardsArray[cardId].name);
      cardsChosenId.push(cardId);
      e.target.setAttribute('src', cardsArray[cardId].image);
      if (cardsChosen.length === 2) {
          setTimeout(checkMatches, 200);
      }
  }



  /*************************************************************************
   *          EVENTS
   ************************************************************************/

});
