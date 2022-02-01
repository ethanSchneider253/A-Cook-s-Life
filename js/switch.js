var playCards = {
    currentCard: "card1",
    card1: {
        id: 1,
        img: '',
        alt: '',
        message: "Welcome to a Cook's Life! so you want to be a world renowned chef? Well you have to put in a lot of work and time. There's lots to learn and burn and not much time where would you like to start?",
        choices: [
            {
                q1: "Attend culinary school",
                target: "card2"
            },
            {
                q1: "Attend school of hard knocks",
                target: 'card3'
            }
        ],
        visibility: "hidden"
    },

    card2: {
        // id: 2,
        img: '',
        alt: '',
        message: "You have attended culinary school for 2 years and now have a large debt to pay off. Its time to find a job and begin your professional career. Which career path will you take?",
        choices: [
            {
                q1: 'BBQ pitmaster',
                target: 'card4'
            },
            {
                q1: 'Top 50 restaurant',
                target: 'card5'
            }
        ],
        visibility: 'hidden'

        // visibility: visibile
        // q3: ,
    },

    card3: {
        id: 3,
        img: '',
        alt: '',
        message: "Yeah who needs school! You've choosen to go straight to work, Congratulations! You are now a dish washer! you must now scrub your way out of the dish pit by impressing your boss. What is the best way of impressing Chef",
        choices: [
            {
                q1: 'you see shrimp need to be peeled, you jump in to do the task',
                target: 'card6'
            },
            {
                q1: 'You come in on your day off to shadow the prep cook',
                target: ''
            }
        ],
        visibility: 'hidden'
    },

    card4: {
        id: 4,
        img: 'https://via.placeholder.com/150',
        alt: '',
        message: "You've choosen the way of the meat! Great Choice! you are now a meat trimmer and fire builder. you spend years learing from a top carolina BBQ pitmaster. ",
        choices: [
            {
                q1: 'Lorem ipsum dolor sit amet. card6',
                target: 'card6',
            },
            {
                q1: 'Lorem ipsum dolor sit amet.',
                target: 'card9'
            }
        ]
    },

    card5: {

    },

    card6: {
        id: 6,
        img: '',
        alt: '',
        message: 'Lorem ipsum dolor sit amet.',
        choices: [
            {
                q1: 'Lorem ipsum dolor sit amet. card7',
                target: 'card7'
            },
            {
                q1: 'Lorem ipsum dolor sit amet.',
                target: ''
            }
        ]
    },

    card7: {
        id: 7,
        img: '',
        alt: '',
        message: 'Lorem ipsum dolor sit amet.',
        choices: [
            {
                q1: 'Lorem ipsum dolor sit amet. card8',
                target: 'card8'
            },
            {
                q1: 'Lorem ipsum dolor sit amet.',
                target: ''
            }
        ]
    }
}



function getBtns() {
    let cardSection = document.getElementById('cardSection');
    let message = '';
    for(var i = 0; i < playCards[this.playCards.currentCard].choices.length; i++) {
        
        message += `
        <div class="input-group mb-3">
            <input class="input-group" id="gameBtn${i}" data-target="${playCards[playCards.currentCard].choices[i].target}" type="radio" name="choices">
            <label for"gameBtn${i}">${playCards[playCards.currentCard].choices[i].q1}</label>
        </div>
        `

        // cardSection.append(message);
    }
    // console.log(i)

    return message;
    
}


function getValue() {
    let nextBtn = document.querySelector('#nextBtn');
    let btnValue = document.querySelectorAll('input');
    
    
    for(var i = 0; i < btnValue.length; i++) {
        if(btnValue[i].checked){
            playCards.currentCard = btnValue[i].getAttribute('data-target')
            loadGame();


            return;
        }
        
    }
}

function loadGame() {
    let startGame = document.querySelector('.start-btn');
    let gameSection = document.getElementById('gameSection');
    let nextCardBtn = document.querySelector('#nextBtn');
    let gameBtnText1 = document.getElementById('gameBtnText1');
    let gameBtnText2 = document.getElementById('gameBtnText2');
    let cardSection = document.getElementById('cardSection');
    

    // console.log(this.playCards.card1.choices[0].q1);
    // console.log(this.playCards[this.playCards.currentCard].choices[0].q1);
    const cardDiv = document.createElement('div')
    // cardDiv.classList.add('.input-group');
    // cardDiv.classList.add('.flex-nowrap')
    cardDiv.innerHTML = 
        // <img src="${this.playCards[this.playCards.currentCard].img}" alt="${this.playCards[this.playCards.currentCard].alt}" class="img-fluid"> 
        `<p class="card-text" id="cardText">${playCards[playCards.currentCard].message}</p>
        ${getBtns()}
        `
    cardSection.prepend(cardDiv);
    

    nextCardBtn.addEventListener('click', (e)=> {
        console.log('click')
        this.getValue();
        cardDiv.style.display = 'none';
        // this.hideCard()
        e.stopPropagation();
        return;
        
    })

    // console.log(this.playCards[this.playCards.currentCard].message)
}

const startGame = document.getElementById('startGame')
const cardSection = document.getElementById('cardSection');

// // let action = new CooksLife();
// startGame.addEventListener('click', ()=> {
//     // action.loadGame();
//     loadGame();
    

//     return
// })

startGame.addEventListener('click', ()=> {

    startGame.classList.add('d-none');
    cardSection.classList.remove('d-none');
})






// action.init();

// handleCard() {
    //     let nextCardBtn = document.querySelector('#nextBtn');
    //     let cardSection = document.getElementById('cardSection');
    //     const this.cardDiv = document.createElement('div')
    //     this.cardDiv.innerHTML = 
    //     `<p class="card-text" id="cardText">${this.playCards[this.playCards.currentCard].message}</p>
    //     ${this.getBtns()}
    //     `
    // cardSection.prepend(this.cardDiv);
    

    // nextCardBtn.addEventListener('click', (e)=> {
    //     console.log('click')
    //     this.getValue();
    //     e.stopPropagation();
    //     cardDiv.style.display = 'none';
    //     // this.hideCard()
    //     return;
        
    // })

    // }

    // nextCardButton() {
    //     nextCardBtn.addEventListener('click', (e)=> {
    //         e.preventDefault();
    //         console.log('click')
    //         this.getValue();
    //         cardDiv.style.display = 'none';
    //         // this.hideCard()
    //         return;
            
    //     })
    // }
    // hideCard() {
    //     for(const key in this.playCards) {
    //         let prevCard = this.playCards[key];
    //         if(prevCard.visibility === 'hidden'){
    //             prevCard.classList.remove('d-none')
    //         } else {
    //             prevCard.classList.remove('hidden')
    //         }

    //     }

        // let prevCard 
        // let nextCardBtn = document.querySelector('#nextBtn');

        // if(nextCardBtn.clicked == true) {
        //     prevCard = prevCard.style.display = none;
        // }
        // let prevCard = this.

    // }

    

// {/* <button class="btn btn-primary game-btn1 game-btn" id="gameButton1 gameBtn"><span id="gameBtnText1">${this.playCards[this.playCards.currentCard].choices[0].q1}</span></button> */}
            // <button class="btn btn-primary game-btn2 game-btn" id="gameButton2 gameBtn"><span id="gameBtnText2 gameBtnText">${this.playCards[this.playCards.currentCard].choices[1].q2}</span></button>





// startGame.addEventListener('click', ()=> {
        //     console.log('click');
        //     gameSection.classList.add('d-none');
        //     cardSection.classList.remove('d-none');
        //     gameBtnText1.innerText = `${this.playCards.card1.q1}`
        //     gameButton2.classList.remove('d-none');
        //     gameBtnText2.innerText = `${this.playCards.card1.q2}`
        //     gameButton1.append(gameBtnText1)
        //     gameButton2.append(gameBtnText2)

            

            // cardSection.classList.remove('d-none');
            // gameBtnText1 =`
            // ${this.playCards.card1.q1}
            // `
            // gameBtnText2 =`
            // ${this.playCards.card1.q2}
            // `
            
        // })




        // loadCard() {
    //     let gameBtns = document.querySelectorAll('.game-btn');
    //     let gameSection = document.getElementById('gameSection');
    //     let gameBtnText = document.getElementById('gameBtnText');
    //     let gameBtnText1 = document.getElementById('gameBtnText1');
    //     let gameBtnText2 = document.getElementById('gameBtnText2');

    //     for(const key in this.playCards) {
    //         const card = this.playCards[key];
    //         gameBtns.forEach(gameBtn => {
    //             gameBtn.addEventListener('click', ()=> {
    //                 console.log('click')
    //                 // if(gameBtns.contains('Attend culinary school')) {
                        
    //                 //     gameSection.innerHTML = `
    //                 //     <img src="${this.playCards.card2.img}" alt="${this.playCards.card2.alt}" class="img-fluid">
    //                 //     <p class="card-text" id="cardText">${this.playCards.card1.message}</p>
    //                 //     <button class="btn btn-primary game-btn1 game-btn" id="gameButton1 gameBtn"><span id="gameBtnText1 gameBtnText">${this.playCards.card2.q1}</span></button>
    //                 //     <button class="btn btn-primary game-btn2 game-btn" id="gameButton2 gameBtn"><span id="gameBtnText2 gameBtnText">${this.playCards.card2.q2}</span></button>`
    //                 // }
                    
    //             })
    //         })
    //     }
        
    // }
// }




// loadCard(currPlayingCard){
    //     for(const key in this.playCards) {
    //         let card = this.playCards[key];
    //         if(card.id == currPlayingCard){
    //             let cardSection = document.getElementById('cardSection')
    //             const gameDisplay = document.createElement('div');
    
    //             gameDisplay.className = 'col-md-6'
    //             gameDisplay.innerHTML = `
    //             <img src="${card.img}" alt="${card.alt}">
    //             <p class="game-msg">${card.message}</p>
    //             <button class="btn game-btn">${card.q1}</button>
    //             <button class="btn game-btn">${card.q2}</button>
    //             </div>
    //             `;
    //             cardSection.append(gameDisplay);
    
                
    
    //         }
    //     }
    // }



    // gamePath() {
        //     let cardSection = document.getElementById('cardSection');
        //     let gameBtns = document.querySelectorAll('.game-btn')
    
        //     for(const key in this.playCards){
        //         const card = this.playCards[key];
        //         // let choices = card.choices[[0],[1]];
        //         gameBtns.forEach(gameBtn =>{
        //             gameBtn.addEventListener('click', ()=>{
        //                 console.log('click');
        //                 for(let i = 0; i < card.choices.length; i++){
        //                     // console.log('click')
        //                 }
        //             })
        //         })
        //     }
    
    
        // }

        // let gameboard;
// let square;

// // window.onload = init;

// // function init() {
// gameboard = document.getElementById('gameboard');
// square = getContext('2d');
// // }

// square.fillStyle = 'rgba(245,90,43,255)'
// square.fillRect(0, 0, 100, 100)

// function Rectangle(x, y, width, height, color) {
//     this.x = x
//     this.y = y
//     this.width = width
//     this.height = height
//     this.color = color
//     this.draw = function () {
//         c.fillStyle = this.color
//         c.fillRect(this.x, this.y, this.width, this.height)
//     }
// }

// // Make teal rectangles at 200 px intervals
// for (let i = 0; i < canvas.width; i += 200) {
//     for (let j = 0; j < canvas.height; j += 200) {
//         let rectangle = new Rectangle(i, j, 100, 100, 'rgba(0,255,255,1.0)')
//         rectangle.draw()
//     }
// }

// for (let i = 100; i < canvas.width; i += 200) {
//     for (let j = 100; j < canvas.height; j += 200) {
//         let rectangle = new Rectangle(i, j, 100, 100, 'rgba(255,105,180, 1.0)')
//         rectangle.draw()
//     }
// }

// const greenSqr = '#1c7757';
// const redSqr = '#f34333';
// const blueSqr = '#0738a2';
// const purpleSqr = '#6f1f8a';
// const yellowSqr = '#f3d722';
// const boardBorder = '#000000';
// const boardBackground = '#ffffff';

// const gameboard = document.getElementById('gameboard');
// const gameboard_ctx = gameboard.getContext('2d');

// const buildBoard = ()=> {
//     gameboard_ctx.strokStyle = boardBorder;
//     gameboard_ctx.fillStyle = boardBackground;


// }

/*

start: welcome to a cook's life! you are and aspiring chef and you must make the right chooices in order to become a 3 michilen star chef. where would you like to begin? 
school or work?

school:

*/





        // nextCardBtn.addEventListener('click', (e)=> {
        //     console.log('click')
        //     this.getValue();
        //     this.cardDiv.style.display = 'none';
        //     // this.hideCard()
        //     e.stopPropagation();
        //     return;
            
        // })



        // this.handleCard();
        // this.getValue();
        // this.gamePath();
        //this.loadCard();
        //this.createBtn();
        // this.startGame()
        // this.getBtns();
        // this.hideCard()