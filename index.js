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

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;
  
    let shapeChoice;
    const shapeProperties = {
      Circle: { tag: "circle", cx: "150", cy: "115", r: "80" },
      Square: { tag: "rect", x: "73", y: "40", width: "160", height: "160" },
      Triangle: { tag: "polygon", points: "150, 18 244, 182 56, 182" },
    };
  
    if (answers.shape in shapeProperties) {
      shapeChoice = new (eval(answers.shape))();
      const shapeProps = shapeProperties[answers.shape];
      let shapeString = `<${shapeProps.tag}`;
      for (const prop in shapeProps) {
        if (prop !== "tag") {
          shapeString += ` ${prop}="${shapeProps[prop]}"`;
        }
      }
      shapeString += ` fill="${answers.shapeBackgroundColor}"/>`;
      svgString += shapeString;
    }
  
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";
  
    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  }
  