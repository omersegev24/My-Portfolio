'use strict';

var gProjs = [
    {
        id: 'mineSweeper',
        name: 'Mine Sweeper',
        title: 'Classic Mine Sweeper game',
        desc: `Minesweeper is a single-player puzzle video game.
        The objective of the game is to clear a rectangular board containing hidden "mines" 
        or bombs without detonating any of them, with help from clues about the number of
        neighboring mines in each field. The game was created in 1990, and has been written
        for many computing platforms in use today. It has many variations and offshoots.`,
        url: 'https://omersegev24.github.io/Mine-Sweeper/',
        publishedAt: new Date().getTime(),
        labels: ['Matrix', 'Board Game'],
    },
    {
        id: 'bookShop',
        name: 'Book Shop',
        title: 'Book shop project',
        desc: 'A bookshop is a shop where books are sold.',
        url: 'https://omersegev24.github.io/Book-Shop/',
        publishedAt: new Date().getTime(),
        labels: ['keyboard events', 'Online Shops'],
    },
    {
        id: 'safeContent',
        name: 'Safe Content',
        title: 'Safe content project',
        desc: 'Login page to secret page.',
        url: 'https://omersegev24.github.io/Safe-Content/',
        publishedAt: new Date().getTime(),
        labels: ['keyboard events', 'Secret Pages'],
    },
    {
        id: 'inPicture',
        name: 'In Picture',
        title: 'In picture game',
        desc: `Find what's in the picture.`,
        url: 'https://omersegev24.github.io/in-pictures-/',
        publishedAt: new Date().getTime(),
        labels: ['keyboard events', 'Board game'],
    },
    {
        id: 'ballBoard',
        name: 'Ball Board',
        title: 'Ball board game',
        desc: '',
        url: 'https://omersegev24.github.io/Ball-board/',
        publishedAt: new Date().getTime(),
        labels: ['Matrix', 'Board game'],
    },
    {
        id: 'chess',
        name: 'Chess',
        title: 'Chess game',
        desc: 'Classic chess game.',
        url: 'https://omersegev24.github.io/chess/',
        publishedAt: new Date().getTime(),
        labels: ['Matrix', 'Board game'],
    },
    {
        id: 'pacman',
        name: 'PacMan',
        title: 'Pacman game',
        desc: 'Classic pacman game.',
        url: 'https://omersegev24.github.io/Pacman/',
        publishedAt: new Date().getTime(),
        labels: ['Matrix', 'Board game'],
    },
    {
        id: 'touchNums',
        name: 'touchNums',
        title: 'Touch numbers game',
        desc: 'Click numbers in order fastest you can!.',
        url: 'https://omersegev24.github.io/touch-nums/',
        publishedAt: new Date().getTime(),
        labels: ['Matrix', 'Board game'],
    }
]

function getProjsToDisplay() {
    return gProjs;
}
function getProjById(id){
   return gProjs.find(proj => proj.id === id);
}