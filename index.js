const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

function userPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter logo text (limited to 3 characters)',
                name: 'logoText',
            },
            {
                type: 'input',
                message: 'Choose your text color (enter color keyword or hex number)',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'Select the shape you would like your logo to be',
                choices: ['Cirlce', 'Square', 'Triangle'],
                name: 'logoShape',
            },
            {
                type: 'input',
                message: 'Choose your shape color (enter color keyword or hex number)',
                name: 'shapeColor',
            },
        ])
        .then((answers) => {
            if (answers.logoText.length > 3) {
                console.log('Logo is limited to no more than 3 characters. Please try again.');
                userPrompt();
            } else {
                writeToFile('logo.svg', answers);
            }
        });
    };
userPrompt();