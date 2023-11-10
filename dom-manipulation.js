// Given the following HTML:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
// </head>
// <body>
//     <div class="header">
//     </div>
//     <section id="container">
//         <ul>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ul>
//         <ol>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ol>
//     </section>
//     <div class="footer">
//     </div>
// </body>
// </html>

// 1.Select the section with an id of 'container' without using querySelector.
const section = document.getElementById('container');

// 2. Select the section with an id of container using querySelector.
const querySection = document.querySelector('#container');

// 3. Select all of the list items with a class of 'second'.
const seconds = document.querySelectorAll('.second');

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const olThird = document.querySelector('ol .third');

// 5. Give the section with an id of container the text "Hello!"
section.innerText = 'Hello!';

// 6. Add the class 'main' on the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');

// 7. Remove the class main on the div with a class of footer.
footer.classList.remove('main');

// 8. Create a new li element.
const li = document.createElement('li');

// 9. Give the li the text "four".
li.innerText = 'four';

// 10. Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(li);

// 11. Loop over all of the li's inside of the ol tag and give them a background color of "green".
const liList = document.querySelectorAll('ol li');
for (let li of liList) {
	li.style.backgroundColor = 'green';
}

// 12. Remove the div with a class of footer.
footer.remove();
