

class CooksLife {
    constructor() {
        this.counter = {
            starCount: 0,
            badReviews: 0
        },

        this.cardDiv = document.createElement('div')



        this.playCards ={
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
                
            },

            card2: {
                id: 2,
                img: '',
                alt: '',
                message: "You have attended culinary school for 2 years and now have a large debt to pay off. To begin paying back the loans you find a job as prep cook. You do a good job executing recipes from your years in school. You have just finished a batch of red beans. a server ask you for a bowl to eat.",
                choices: [
                    {
                        q1: 'you give the hungry server a bowl of red beans',
                        target: 'card4'
                    },
                    {
                        q1: 'you shew the server back to the server alley where they belong',
                        target: 'card11'
                    }
                ],
                

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
                        target: 'card5'
                    }
                ],
            },

            card4: {
                id: 4,
                img: 'media/fired-edited.png',
                alt: "You're Fired",
                message: "Chef saw you giving away free food. He assumes you are the one who has been stealing. He fires you and you can no longer pay your debt. You are now cooking in jail forever. Your life as a cook is over...............",
                choices: [
                    {
                        q1: 'restart',
                        target: 'card1',
                    },
                    
                ]
            },

            card5: {
                id: 5,
                img: '',
                alt: '',
                message: "you've spend your day off at the restaurant shadowing the prep cook. You learn a few recipes and techniques. The Chef notices you and promotes you to prep cook. Congragulations!",
                choices: [
                    {
                        q1: 'Celebrate with the crew at the bar',
                        target: 'card7'
                    },
                    {
                        q1: 'go home and rest for the next day',
                        target: 'card8'
                    }
                ]

            },

            card6: {
                id: 6,
                img: '',
                alt: '',
                message: 'you have peeled all the shrimp for the fry cook. he is greatful and puts a good word in with Chef. He ask if you want to join him for a smoke break.',
                choices: [
                    {
                        q1: 'join in smoke break',
                        target: 'card9'
                    },
                    {
                        q1: 'turn down offer',
                        target: 'card10'
                    }
                ]
            },

            card7: {
                id: 7,
                img: 'media/fired-edited.png',
                alt: "You're Fired",
                message: 'You stayed out late and had a few to many. You overslept and missed work and have lost your job. Your life as a cook is over..........',
                choices: [
                    {
                        q1: 'restart',
                        target: 'card1'
                    },
                    
                ]
            },

            card8: {
                id: 8,
                img: '',
                alt: '',
                message: 'Well rested and ready to go you do a great job as a prep cook for a few months learning the recipe book. chef offers you a position on the line as the new fry cook!',
                choices: [
                    {
                        q1: 'Off to fry all the fries!',
                        target: 'card14'
                    }
                    
                ]
            },

            card9: {
                id: 9,
                img: 'media/fired-edited.png',
                alt: "You're Fired",
                message: 'the fry cook leads you around back to take a break and offers a cigarette. you finish it and toss it out in the trash. This starts a fire and burns down the restaurant. You have lost your job and your life as a cook is over before it began.........',
                choices: [
                    {
                        q1: 'restart',
                        target: 'card1'
                    },
                    
                ]
                
            },

            card10: {
                id: 10,
                img: '',
                alt: '',
                message: 'You decide to turn down the fry cooks offer and head back to the dish pit to keep scrubbing away at the pile of dirty dishes. The next day you learn the fry cook has been fired for catching the dumpster on fire with his cigarette. Chef has named you the new fry cook. Congratulations!!',
                choices: [
                    {
                        q1: 'Off to fry all the fries!!!',
                        target: 'card14'
                    },
                    
                ]
            },

            card11: {
                id: 11,
                img: '',
                alt: '',
                message: 'You notice chef looking and successfully shew the server back to the server alley. You have gained some trust from Chef. The sous chef instucts you to prep enough ravioli for dinner servie. You see 4 sheet trays of ravioli prepped.',
                choices: [
                    {
                        q1: 'That will be enough for the night. Clock out a litle early',
                        target: 'card12',
                    },
                    {
                        q1: 'Prep one extra sheet tray just to make sure',
                        target: 'card13',
                    }
                ]
            },

            card12: {
                id: 12,
                img: 'media/fired-edited.png',
                alt: "You're Fired",
                message: "You Clock out early and leave. After you leave a bus of italian grandmothers walk in and all order ravioli. Raviolis are 86'd less than half way through the dinner service. You failed to have enough prepped you have been fired.....",
                choices: [
                    {
                        q1: 'Try Again',
                        target: 'card1',
                    },
                ]
            },

            card13: {
                id: 13,
                img: '',
                alt: '',
                message: 'Good thing you stuck around and did extra ravioli. A bus of italian grandmothers all ordered ravioli and said they were amazing! The night crew finished the service with just enough. After working as a prep cook, Chef offers you a spot on the line. You have been given the option of working saute station or fry station',
                choices: [
                    {
                        q1: 'Fry Station',
                        target: 'card14',
                    },
                    {
                        q1: 'Saute Station',
                        target: '',
                    }
                ]
            },

            card14: {
                id: 14,
                img: '',
                alt: '',
                message: "You are the new fry cook. You are learning to become the master of all things cooked in deep fat! After numerous shifts on the fryer you have grown comfortable working the line. the cook working the middle station cuts his finger and must leave the line. You have a few minutes with no tickets and see the middle is getting backed up. What do you do? ",
                choices: [
                    {
                        q1: 'Sit back and wait for him to get back and let him catch his self back up',
                        target: 'card15',
                    },
                    {
                        q1: 'Fill in until he comes back',
                        target: 'card16',
                    }
                ]
            },

            card15: {
                id: 15,
                img: '',
                alt: '',
                message: 'Chef is angry no one stepped up till fill the injured cooks spot and allowed the kitchen to fall behind. No brownie points for you and you have been given extra cleaning task after service',
                choices: [
                    {
                        q1: 'Lesson learned and lucky to still be working the line. Tomorrow is a new day',
                        target: '',
                    },
                    
                ]
            },

            card16: {
                id: 16,
                img: '',
                alt: '',
                message: 'You jump in to fill the spot and pump out the rest of the tickets successfully! Chef is impressed with your initiative. You could be the next in line for a promotion',
                choices: [
                    {
                        q1: 'Great job stepping up and jumping in! You are well on your way to becoming a top line cook!',
                        target: '',
                    },
                    
                ]
            },

            card17: {
                id: 17,
                img: '',
                alt: '',
                message: '',
                choices: [
                    {
                        q1: '',
                        target: '',
                    },
                    {
                        q1: '',
                        target: '',
                    }
                ]
            },

            card18: {
                id: 18,
                img: '',
                alt: '',
                message: '',
                choices: [
                    {
                        q1: '',
                        target: '',
                    },
                    {
                        q1: '',
                        target: '',
                    }
                ]
            },


        }

        this.endGame = {
            winGame: "You've Won, Congratulations! You've Earned 3 Michelin Stars and are one of the top chefs in the world!",
            loseGame: "Time is up. Looks like you've succombed to the life of cook. After years of to much butter, salt, and late night debachery, you have died from a heart attack. you lose....."
        }

    }

    init() {
        this.loadGame();
        
        let nextCardBtn = document.querySelector('#nextBtn');

        nextCardBtn.addEventListener('click', ()=> {
            console.log('click')
            this.getValue();
            cardDiv.style.display = 'none';
            // e.stopPropagation();
            return;
            
        })
    }



    
    // creating input radio buttons
    getBtns() {
        let cardSection = document.getElementById('cardSection');
        let message = '';
        for(var i = 0; i < this.playCards[this.playCards.currentCard].choices.length; i++) {
            
            message += `
            <div class="input-group mb-3">
                <input class="input-group-text" id="gameBtn${i}" data-target="${this.playCards[this.playCards.currentCard].choices[i].target}" type="radio" name="choices">
                <label for"gameBtn${i}">${this.playCards[this.playCards.currentCard].choices[i].q1}</label>
            </div>
            `

        }

        return message;
        
    }

    



    // getting values for input to take you to next card
    getValue() {
        let nextBtn = document.querySelector('#nextBtn');
        let btnValue = document.querySelectorAll('input');
        
        
        for(var i = 0; i < btnValue.length; i++) {
            if(btnValue[i].checked){
                this.playCards.currentCard = btnValue[i].getAttribute('data-target')
                    
            }
            
        }
        this.loadGame();
        return;
    }
    

    // load playing cards on screen
    loadGame() {
        let startGame = document.querySelector('.start-btn');
        let gameSection = document.getElementById('gameSection');
        // let nextCardBtn = document.querySelector('#nextBtn');
        let gameBtnText1 = document.getElementById('gameBtnText1');
        let gameBtnText2 = document.getElementById('gameBtnText2');
        let cardSection = document.getElementById('cardSection');
        

        this.cardDiv.classList.add('.card-div');
        this.cardDiv.classList.add('container-fluid')
        this.cardDiv.innerHTML = 
            `<div class="row">
            <img src="${this.playCards[this.playCards.currentCard].img}" alt="${this.playCards[this.playCards.currentCard].alt}" class="img-fluid img-responsive card-div-img col-md-4"> 
            </div>
            <p class="card-text" id="cardText">${this.playCards[this.playCards.currentCard].message}</p>
            ${this.getBtns()}
            `
        cardSection.prepend(this.cardDiv);
        


    }

}

    
const startGame = document.getElementById('startGame')
const cardSection = document.getElementById('cardSection');
const homeImg = document.getElementById('homeImg');

// start game & hide home card
let action = new CooksLife();
startGame.addEventListener('click', ()=> {
    action.init();
    startGame.classList.add('d-none');
    homeImg.classList.add('d-none');
    cardSection.classList.remove('d-none');

    return
})
