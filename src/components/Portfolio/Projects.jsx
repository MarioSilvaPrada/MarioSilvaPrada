import colorGame from '../../img/portfolio/color-game.PNG';
import robofriends from '../../img/portfolio/robot-friends.PNG';
import background from '../../img/portfolio/background.PNG';
import orbit from '../../img/portfolio/orbit.PNG';
import calculator from '../../img/portfolio/calculator.PNG';
import airbnb from '../../img/portfolio/airbnb.PNG';
import portfolio from '../../img/portfolio/portfolio.PNG';
import movies from '../../img/portfolio/movies.png';
import vueGame from '../../img/portfolio/vue-game.png';
import event from '../../img/portfolio/event.png';

export const projects = [
    {
        img: `${colorGame}`,
        url:'https://colorgameproject1.netlify.com/',
        title: 'Color Game',
        description: 'Game to guess the color. Built with Vanilla Javascript.',
        github: 'https://github.com/MarioSilvaPrada/color_game'
    },
    {
        img: `${robofriends}`,
        url:'https://robot-friends-project.netlify.com/',
        title: 'Robot Friends',
        description: 'A React project built with Tachyons and RoboHash API.',
        github: 'https://github.com/MarioSilvaPrada/robofriends'
    },
    {
        img: `${background}`,
        url:'https://background-generator-project.netlify.com/',
        title: 'Background Generator',
        description: 'Project to help you choose your background gradient. Built with Vanilla Javascript.',
        github: 'https://github.com/MarioSilvaPrada/background-generator'
    },
    {
        img: `${orbit}`,
        url:'https://orbit-animation.netlify.com/',
        title: 'Orbit Animation',
        description: 'A simple animation just built with CSS3',
        github: 'https://github.com/MarioSilvaPrada/orbit-generator'
    },
    {
        img: `${calculator}`,
        url:'https://personal-calculator.netlify.com/',
        title: 'Personal Calculator',
        description: 'Calculator implemented with React and MathJS library.',
        github: 'https://github.com/MarioSilvaPrada/personal-calculator'
    },
    {
        img: 'https://i.cdn.turner.com/adultswim/big/img/2018/05/07/rick-and-morty.jpg',
        url:'https://rick-and-morty-wiki.netlify.com/',
        title: 'Rick and Morty Wikipedia',
        description: 'A funny website built with React, GraphQL and Styled Components',
        github: 'https://github.com/MarioSilvaPrada/rick-and-morty-wiki'
    },
    {
        img: `${airbnb}`,
        url:'https://github.com/MarioSilvaPrada/airbnb-project',
        title: 'Airbnb Clone',
        description: 'A Airbnb clone developed with MongoDB, Mongoose, NodeJs and EJS.',
        github: 'https://github.com/MarioSilvaPrada/airbnb-project'
    },
    {
        img: `${portfolio}`,
        url:'https://mariosilvaprada.com',
        title: 'My Portfolio',
        description: 'Built this site so I can share my skills and projects. Developed with React and deployed in AWS.',
        github: 'https://github.com/MarioSilvaPrada/my-portfolio'
    },
    {
        img: `${vueGame}`,
        url:'https://vue-monsterslayer.netlify.com/',
        title: 'Monster Slayer Game',
        description: 'A simple game developed with VueJs. ',
        github: 'https://github.com/MarioSilvaPrada/vue_game'
    },
    {
        img: `${event}`,
        url:'https://event-organizer-project.netlify.com/allEvents',
        title: 'Event Organizer',
        description: 'Platform where you can check and seletc next events to go. Built with Typescript, ReactJs and MomentJs',
        github: 'https://github.com/MarioSilvaPrada/MovieAPI_React'
    },
    {
        img: `${movies}`,
        url:'https://pradamovies.netlify.com/',
        title: 'Movie Library',
        description: 'A movie library built with Redux, React and Styled Components. ',
        github: 'https://github.com/MarioSilvaPrada/MovieAPI_React'
    }
];