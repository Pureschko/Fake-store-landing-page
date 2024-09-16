const root = document.querySelector("#root");
console.log(root);
const Nav = (second) => {
    root.innerHTML += `
   <nav>
            <ul>
                <li><a href="./index.html" target="_self">Home</a></li>
                <li><a href="./cart.html" target="_self">Cart</a></li>
            </ul>
        </nav>
        `;
};
