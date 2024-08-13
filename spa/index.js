const users = [];
// const menu = [];
const cartItems = [];
let menuItems = []; // Use this variable to store fetched menu items



const menu=function(){
    fetch('http://localhost:3000/pdts').
    then((res)=> res.json())
    .then((pdts)=>{
        menuItems = pdts; // Store fetched menu items
        renderMenu(pdts)
    })
}

const renderMenu = function(pdts) {
    const main = document.getElementById('main');
    main.innerHTML = ''; // Clear previous content

    for (let i = 0; i < pdts.length; i++) {
        main.innerHTML += `
            <div class="card">
                <div class="card_body">
                    <h3 class="title">${pdts[i].title}</h3>
                    <p class="text">${pdts[i].description}</p>
                    <h5>${pdts[i].price}</h5>
                    <button class="primary" onclick="addItem('${pdts[i].id}')">Add to Cart</button>
                    <button class="primary" onclick="details('${pdts[i].id}')">Details</button>
                </div>
            </div>
        `;
    }
};


//const main = function() {
 //   document.getElementById('main').innerHTML = `
  //      <button onclick="menu()"><h3>Show Menu</h3></button>
   // `;
//};



const addItem = function(id) {
    const item = menuItems.find(function(item) {
        return item.id == id;
    });
    
    if (item) {
        cartItems.push(item);
        alert(`${item.title} added to cart`);
    }
};



const details = function(id) {

    const item = menuItems.find(function(item) {
        return item.id == id;
    });

    if (item) {
        const main = document.getElementById('main');
        main.innerHTML = `
            <div class="card">
                <div class="card_body">
                    <h3 class="title">${item.title}</h3>
                    <p class="text">${item.description}</p>
                    <h5>${item.price}</h5>
                    <button class="primary" onclick="menu()">Back to Menu</button>
                </div>
            </div>`
    }
};


const renderCart = function() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    if (cartItems.length === 0) {
        main.innerHTML += '<p><h2>Your cart is empty.</h2></p>';
    } else {
        for (let i = 0; i < cartItems.length; i++) {
            main.innerHTML += `
                <div class="card_card">
                    <div class="card_body">
                        <h3 class="title">${cartItems[i].title}</h3>
                        <p class="text">${cartItems[i].description}</p>
                        <h5>${cartItems[i].price}</h5>
                    </div>
                </div>
            `;
        }
    }
};




const searchMenu = function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredMenu = menuItems.filter(item => item.title.toLowerCase().includes(query));
    renderMenu(filteredMenu);
};

const signup = function() {
    document.getElementById('main').innerHTML = `
        <div class="wrapper">
        <form action="" id="signupForm">
            <h1>signup</h1>
            <div class="input-name">
                <input type="text" placeholder="First Name" required>
                <input type="text" placeholder="Last Name" required>
                <i class='bx bxs-user'></i>
            </div>
            <div class="input-Boxx">
                <input type="email" id="signupEmail" placeholder="Email" required>
                <i class='bx bxs-user'></i>
            </div>
            <div class="input-Boxx">
                <input type="password" id="signupPassword" placeholder="Create Password" required>
                <i class='bx bxs-lock-alt'></i>
            </div>
            <div class="input-Boxx">
                <input type="date" placeholder="Birthday" required>
                <i class='bx bxs-lock-alt'></i>
            </div>
            <div class="back_patient">
                <div class="gender">
                    <p>Gender:</p>
                    <div class="radio">
                        <div class="male"><label> <input type="radio" name="gender">Male</label></div>
                        <div class="female"><label> <input type="radio" name="gender">Female</label></div>
                    </div>
                </div>
            </div>
            <div class="main_btn">
                <button type="submit" class="btn">Signup</button>
            <div class="register-link">
                <p>Do You have an account? <a href="#" onclick="login()">Login</a></p>
            </div>
            </div>
            
        </form>
    </div>
    `;
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        users.push({ email, password });
        console.log('Signup:', { email, password });
        alert('Signup successful!');
        login();
    });
};


const login = function() {
    document.getElementById('main').innerHTML = `
    <div class="wrapper">
        <form action="" id="loginForm">
            <h1>Login</h1>
            <div class="input-Box">
                <label>Email:</label>
                <input type="email" id="loginEmail" placeholder="Email" required>
            </div>
            <div class="input-Box">
                <label>Password:</label>
                <input type="password" id="loginPassword" placeholder="Password" required>
            </div>
            <div class="remember-forgot">
                <label> <input type="checkbox">Rememer me</label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit" class="btn">Login</button>
            <div class="register-link">
                <p>Don't have an account?<a href="#" onclick="signup()">Register</a></p>
            </div>
        </form>
    </di>
    `;
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            console.log('Login successful:', { email, password });
            alert('Login successful!');
        } else {
            alert('Invalid credentials');
        }
        menu();
    });
}
    const add = function() {
        document.getElementById('main').innerHTML = `
            <div class="wrapper">
                <form id="addProductForm">
                    <h1>Add Product</h1>
                    <div class="input-Box">
                        <label>Title:</label>
                        <input type="text" id="productTitle" placeholder="Title" required>
                    </div>
                    <div class="input-Box">
                        <label>Description:</label>
                        <input type="text" id="productDescription" placeholder="Description" required>
                    </div>
                    <div class="input-Box">
                        <label>Price:</label>
                        <input type="number" id="productPrice" placeholder="Price" required>
                    </div>
                    <div class="input-Box">
                        <button type="submit" class="btn_add">Add Product</button>
                    </div>

                </form>
            </div>
        `;
        document.getElementById('addProductForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const title = document.getElementById('productTitle').value;
            const description = document.getElementById('productDescription').value;
            const price = document.getElementById('productPrice').value;
            const newProduct = { title, description, price };


            fetch('http://localhost:8000/pdts', {
                method: 'POST',
                headers: {"content-type": "application/json"},
                body: JSON.stringify(newProduct),
                }).then((res) => {
                fetch('http://localhost:8000/pdts')
                .then((res) =>{
                    return res.json()
                }).then((data) => {
                    renderMenu(data)
                })
            })
        })
    }

    
// Initialize the main page
//main();
