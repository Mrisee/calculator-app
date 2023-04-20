# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview
Intresting for me calculator project

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

Main Theme
![](/screens/1screen.png)

Second Lite Theme
![](/screens/2screen.png)

Third Wierd Theme
![](/screens/3screen.png)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/intresting-calculator-project-cQrAi43kNx)
- Live Site URL: (https://mrisee.github.io/calculator-app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JS

### What I learned
using css-variables
and have had a good practice in JS

```css
 div:hover{
        top: 1px;
        box-shadow: 0px 5px var(--keys-shadow-color);
        background-color: var(--keys-bg-hover);
    }
```
```js
document.documentElement.style.setProperty('--del-bg-hover', 'hsl(225, 31%, 57%)'); 
document.documentElement.style.setProperty('--equals-bg-hover', 'hsl(6, 81%, 60%)'); 
```

## Author

- Website - [Add your name here](https://github.com/Mrisee)
- Frontend Mentor - [@Mrisee](https://www.frontendmentor.io/profile/Mrisee)


