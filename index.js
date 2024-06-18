let pokemon = getPokeData();
let [p,c,s,b,g,f,d,m] = pokemon;

console.log()

function getPokeData() {
    return [ //four different pokemon objects
        {
            name: 'Pikachu',
            hp: 75,
            fainted: false,
            type: 'electric',
            moves: [
                {name: 'thunderwave', power: 2, type: 'normal', effect: 'paralyzed'},
                {name: 'thundershock', power: 12, type: 'electric'},
                {name: 'thunder', power: 50, type: 'electric'},
                {name: 'quick attack', power: 20, type: 'normal'},
            ],
            faint: function () {
                alert(`${this.name} fainted!`);
            }
        },
        {
            name: 'Charmander',
            hp: 69,
            fainted: false,
            type: 'fire',
            moves: [
                {name: 'flamethrower', power: 35, type: 'fire'},
                {name: 'stomp', power: 20, type: 'fighting'},
                {name: 'bite', power: 18, type: 'dark'},
                {name: 'tackle', power: 15, type: 'normal'},
            ],
            faint: function () {
                alert(`${this.name} fainted!`);
            }
        },
        {
            name: 'Squirtle',
            hp: 85,
            fainted: true,
            type: 'water',
            moves: [
                {name: 'bubble', power: 12, type: 'water'},
                {name: 'withdraw', power: 0, type: 'normal', effect: "raises pokemon's HP by 15 points"},
                {name: 'watergun', power: 30, type: 'water'},
                {name: 'hydropump', power: 100, type: 'water'},
            ],
            faint: function () {
                alert(`${this.name} fainted!`);
            }
        },
        {
            name: 'Bulbasaur',
            hp: 75,
            fainted: false,
            type: 'grass',
            moves: [
                {name: 'razorleaf', power: 20, type: 'grass'},
                {name: 'tackle', power: 20, type: 'normal'},
                {name: 'solarbeam', power: 80, type: 'grass'},
                {name: 'poison powder', power: 0, type: 'poison', effect: 'poisoned'},
            ],
            faint: function () {
                alert(`${this.name} fainted!`);
            }
        },
        {
            name: 'Gastly',
            hp: 50,
            fainted: false,
            type: 'grass',
            moves: [
                {name: 'lick', power: 15, type: 'ghost'},
                {name: 'confuse ray', power: 0, type: 'ghost', effect: 'confused'},
                {name: 'shadow ball', power: 45, type: 'ghost'},
                {name: 'destiny bond', power: 0, type: 'ghost', effect: "opponent KO'ed if this pokemon is KO'ed"},
            ],
            faint: function () {
                alert(`${this.name} fainted!`);
            }
        },
        {
            name: "Farfetc'd",
            hp: 60,
            fainted: true,
            type: 'flying',
            moves: [
                {name: 'gust', power: 25, type: 'flying'},
                {name: 'confuse ray', power: 0, type: 'ghost', effect: 'confused'},
                {name: 'air slash', power: 45, type: 'flying'},
                {name: 'sand attack', power: 20, type: 'ground', effect: 'lowers opponent accuracy'},
            ],
            faint: function () {
                alert(`${this.name} fainted!`);
            }
        },
        {
            name: 'Diglet',
            hp: 80,
            fainted: true,
            type: 'ground',
            moves: [
                {name: 'rock slide', power: 35, type: 'rock'},
                {name: 'earthquake', power: 50, type: 'ground'},
                {name: 'sand attack', power: 20, type: 'ground', effect: 'lowers opponent accuracy'},
                {name: 'slash', power: 20, type: 'normal'},
            ],
            faint: function () {
                alert(`${this.name} fainted!`);
            }
        },
        {
            name: 'Mew',
            hp: 120,
            fainted: false,
            type: 'psychic',
            moves: [
                {name: 'psychic', power: 50, type: 'psychic'},
                {name: 'pound', power: 20, type: 'normal'},
                {name: 'metronome', power: 0, type: 'normal', effect: 'selects random move'},
                {name: 'transform', power: 0, type: 'poison', effect: 'transforms this pokemon into opposing pokemon'},
            ],
            faint: function () {
                alert(`${this.name} fainted!`);
            }
        },
    ]
}