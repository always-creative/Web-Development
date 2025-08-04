// insertAdjacentHTML() :- Adds HTML without replacing existing content.
// Positions you can use:

// 'beforebegin' → Before the element

// 'afterbegin' → Inside, at the top

// 'beforeend' → Inside, at the bottom (most common)

// 'afterend' → After the element

const container = document.getElementById('container');
container.insertAdjacentHTML('beforeend', '<li>Milk</li>');

// createCard

const createCard = (title, content) => {
    const html = `
    <div class="card">
      <h3>${title}</h3>
      <p>${content}</p>
      <button class="delete-btn">×</button>
    </div>
  `;

    document.getElementById('container').insertAdjacentHTML('beforeend', html);
};


createCard('Welcome', 'This is a sample card');

// alternative
//createElement() → The Classic Way :-Creates a new HTML element from scratch.

const newDiv = document.createElement('div');
newDiv.textContent = "Hello, I'm a new div!";
document.body.appendChild(newDiv); //Add it to the webpage (e.g., inside <body>)

//createDocumentFragment() :-Helps add multiple elements efficiently.
// Adding elements one by one slows the page. A fragment adds everything at once.
// Step 1: Create a fragment (like a "bag" to hold elements)
const fragment = document.createDocumentFragment();

// Step 2: Add 100 items to the fragment
for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}

// Step 3: Add ALL items to the page at once
document.getElementById('container').appendChild(fragment);

