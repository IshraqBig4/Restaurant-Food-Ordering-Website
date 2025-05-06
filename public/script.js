const menuData = {
    breakfast: [
        { id: 'b1', name: 'Tea', price: 2, image: 'assets/menu/tea.jpg', category: 'breakfast' },
        { id: 'b2', name: 'Idli', price: 4, image: 'assets/menu/idli.jpg', category: 'breakfast' },
        { id: 'b3', name: 'Dosa set', price: 4, image: 'assets/menu/dosa.jpg', category: 'breakfast' },
        { id: 'b4', name: 'Onion uttapam', price: 6, image: 'assets/menu/uttapam.jpg', category: 'breakfast' },
        { id: 'b5', name: 'Unda wada', price: 1, image: 'assets/menu/wada.jpg', category: 'breakfast' },
        { id: 'b6', name: 'Upmavu', price: 4, image: 'assets/menu/upmavu.jpg', category: 'breakfast' },
        { id: 'b7', name: 'Puri baji', price: 5, image: 'assets/menu/puri.jpg', category: 'breakfast' },
        { id: 'b8', name: 'Channa masala', price: 5, image: 'assets/menu/channa.jpg', category: 'breakfast' },
        { id: 'b9', name: 'Green peas masala', price: 5, image: 'assets/menu/peas.jpg', category: 'breakfast' },
        { id: 'b10', name: 'Porotha Set', price: 4, image: 'assets/menu/porotha.jpg', category: 'breakfast' },
        { id: 'b11', name: 'Chapathi set', price: 4, image: 'assets/menu/chapathi.jpg', category: 'breakfast' },
        { id: 'b12', name: 'Wada sett', price: 4, image: 'assets/menu/wada-set.jpg', category: 'breakfast' },
        { id: 'b13', name: 'Masala dosa', price: 6, image: 'assets/menu/masala-dosa.jpg', category: 'breakfast' },
        { id: 'b14', name: 'Ghee rost', price: 5, image: 'assets/menu/ghee-rost.jpg', category: 'breakfast' },
        { id: 'b15', name: 'Veg curry', price: 5, image: 'assets/menu/veg-curry.jpg', category: 'breakfast' },
        { id: 'b16', name: 'Paneer kadai', price: 12, image: 'assets/menu/paneer-kadai.jpg', category: 'breakfast' },
        { id: 'b17', name: 'Veg kurma', price: 6, image: 'assets/menu/veg-kurma.jpg', category: 'breakfast' },
        { id: 'b18', name: 'Brocolli mushroom', price: 15, image: 'assets/menu/brocolli.jpg', category: 'breakfast' },
        { id: 'b19', name: 'Daal tadak', price: 5, image: 'assets/menu/daal.jpg', category: 'breakfast' },
    ],
    friedRice: [
        { id: 'fr1', name: 'Veg fried rice', price: 12, image: 'assets/menu/veg-fried-rice.jpg', category: 'fried-rice' },
        { id: 'fr2', name: 'Egg fried rice', price: 13, image: 'assets/menu/egg-fried-rice.jpg', category: 'fried-rice' },
        { id: 'fr3', name: 'Chicken fried rice', price: 15, image: 'assets/menu/chicken-fried-rice.jpg', category: 'fried-rice' },
        { id: 'fr4', name: 'Singapore Friedrice', price: 18, image: 'assets/menu/singapore-fried-rice.jpg', category: 'fried-rice' },
        { id: 'fr5', name: 'Schezwan Friedrice', price: 15, image: 'assets/menu/schezwan-rice.jpg', category: 'fried-rice' },
        { id: 'fr7', name: 'Green house Special', price: 20, image: 'assets/menu/special-rice.jpg', category: 'fried-rice' },
    ],
    mutton: [
        { id: 'm1', name: 'Mutton biriyani', price: 18, image: 'assets/menu/mutton-biriyani.jpg', category: 'mutton' },
        { id: 'm2', name: 'Mutton curry', price: 15, image: 'assets/menu/mutton-curry.jpg', category: 'mutton' },
        { id: 'm3', name: 'Mutton kadai', price: 18, image: 'assets/menu/mutton-kadai.jpg', category: 'mutton' },
        { id: 'm4', name: 'Mutton pepper', price: 15, image: 'assets/menu/mutton-pepper.jpg', category: 'mutton' },
        { id: 'm5', name: 'Mutton kondata', price: 18, image: 'assets/menu/mutton-kondata.jpg', category: 'mutton' },
        { id: 'm6', name: 'Mutton paya', price: 10, image: 'assets/menu/mutton-paya.jpg', category: 'mutton' },
    ],
    chicken: [
        { id: 'c1', name: 'Chicken biriyani', price: 12, image: 'assets/menu/chicken-biriyani.jpg', category: 'chicken' },
        { id: 'c2', name: 'Chicken chilli boneless', price: 15, image: 'assets/menu/chicken-boneless.jpg', category: 'chicken' },
        { id: 'c4', name: 'Chicken kadai', price: 15, image: 'assets/menu/chicken-kadai.jpg', category: 'chicken' },
        { id: 'c5', name: 'Chicken curry', price: 10, image: 'assets/menu/chicken-curry.jpg', category: 'chicken' },
        { id: 'c6', name: 'Chicken kolapuri', price: 18, image: 'assets/menu/chicken-kholapuri.jpg', category: 'chicken' },
        { id: 'c7', name: 'Chicken hariyali', price: 15, image: 'assets/menu/chicken-hariyali.jpg', category: 'chicken' },
        { id: 'c8', name: 'Chicken pepper', price: 12, image: 'assets/menu/chicken-pepper.jpg', category: 'chicken' },
        { id: 'c9', name: 'Chicken malai', price: 15, image: 'assets/menu/chicken-malai.jpg', category: 'chicken' },
        { id: 'c11', name: 'Chicken Haleem', price: 10, image: 'assets/menu/chicken-haleem.jpg', category: 'chicken' },
        { id: 'c12', name: 'Chicken lollipop', price: 3, image: 'assets/menu/chicken-lollipop.jpg', category: 'chicken' },
        { id: 'c13', name: 'Chicken tawa', price: 5, image: 'assets/menu/chicken-tawa.jpg', category: 'chicken' },
    ],
    meal: [
        { id: 'ml1', name: 'Fish meal', price: 15, description: 'Seasonal price', image: 'assets/menu/fish-meal.jpg', category: 'meal' },
        { id: 'ml3', name: 'Veg meal', price: 12, image: 'assets/menu/veg-meal.jpg', category: 'meal' },
    ],
    mojitosShakes: [
        { id: 'ms2', name: 'Blue storm', price: 8, image: 'assets/menu/blue-storm.jpg', category: 'mojitos-shakes' },
        { id: 'ms4', name: 'Oreo', price: 8, image: 'assets/menu/oreo-shake.jpg', category: 'mojitos-shakes' },
        { id: 'ms10', name: 'Lotus', price: 10, image: 'assets/menu/lotus-shake.jpg', category: 'mojitos-shakes' },
        { id: 'ms13', name: 'Orange', price: 8, image: 'assets/menu/orange-shake.jpg', category: 'mojitos-shakes' },
        { id: 'ms15', name: 'Passion fruit', price: 8, image: 'assets/menu/passion-fruit.jpg', category: 'mojitos-shakes' },
    ],
    juice: [
        { id: 'j1', name: 'Avocado', price: 10, image: 'assets/menu/avocado-juice.jpg', category: 'juice' },
        { id: 'j2', name: 'Orange', price: 8, image: 'assets/menu/orange-juice.jpg', category: 'juice' },
        { id: 'j3', name: 'Lemon mint', price: 8, image: 'assets/menu/lemon-mint-juice.jpg', category: 'juice' },
        { id: 'j4', name: 'Strawberry', price: 8, image: 'assets/menu/strawberry-juice.jpg', category: 'juice' },
        { id: 'j5', name: 'Cocktail', price: 10, image: 'assets/menu/cocktail.jpg', category: 'juice' },
    ]
};

let cart = [];

// Authentication state
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

function sanitize(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function updateUserUI() {
    const userIcon = document.getElementById("user-icon");
    const userLink = document.getElementById("user-account-link");
    if (currentUser) {
        userIcon.classList.remove("fa-user");
        userIcon.classList.add("fa-sign-out-alt");
        userLink.title = "Logout";
    } else {
        userIcon.classList.remove("fa-sign-out-alt");
        userIcon.classList.add("fa-user");
        userLink.title = "Login/Register";
    }
}

function logout() {
    fetch("http://localhost:4000/api/auth/logout", {
        method: "POST",
        credentials: "include",
    })
        .then(() => {
            currentUser = null;
            localStorage.removeItem("currentUser");
            updateUserUI();
            alert("You have been logged out.");
        })
        .catch((error) => alert("Logout failed: " + error.message));
}

function renderMenu(category = 'all') {
    const container = document.querySelector(".menu-items-container");
    container.innerHTML = "";

    let items = [];
    if (category === 'all') {
        for (let key in menuData) {
            items.push(...menuData[key]);
        }
    } else {
        for (let key in menuData) {
            items.push(...menuData[key].filter(item => item.category === category));
        }
    }

    items.forEach(item => {
        const isInCart = cart.some(cartItem => cartItem.id === item.id);
        const buttonText = isInCart ? "Added" : "Add";
        const buttonClass = isInCart ? "add-to-cart added" : "add-to-cart";
        container.innerHTML += `
            <div class="menu-item">
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${sanitize(item.name)}">
                </div>
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${sanitize(item.name)}</h3>
                    <p class="menu-item-price">${item.price} SAR</p>
                    <div class="menu-item-actions">
                        <div class="quantity-control">
                            <button onclick="changeQty('${item.id}', -1)">-</button>
                            <input id="qty-${item.id}" type="number" value="1" min="1">
                            <button onclick="changeQty('${item.id}', 1)">+</button>
                        </div>
                        <button class="${buttonClass}" onclick="addToCart('${item.id}')">${buttonText}</button>
                    </div>
                </div>
            </div>`;
    });
}

function changeQty(id, delta) {
    let input = document.getElementById(`qty-${id}`);
    let val = parseInt(input.value);
    val = Math.max(1, val + delta);
    input.value = val;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

function addToCart(id) {
    const item = Object.values(menuData).flat().find(i => i.id === id);
    if (item) {
        if (item.price === 0) {
            alert("Price for this item varies. Please contact us for details.");
            return;
        }
        let qty = parseInt(document.getElementById(`qty-${id}`).value);
        const existing = cart.find(c => c.id === id);
        if (existing) {
            existing.quantity += qty;
        } else {
            cart.push({ ...item, quantity: qty });
        }
        updateCartUI();
        renderMenu(document.querySelector(".category-btn.active").dataset.category);
        saveCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
    renderMenu(document.querySelector(".category-btn.active").dataset.category);
    saveCart();
}

function changeCartQuantity(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.quantity = Math.max(1, item.quantity + delta);
        if (item.quantity === 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    }
    saveCart();
}

window.onload = async () => {
    loadCart();
    menuData = await fetchMenu();
    renderMenu("all");
    updateUserUI();
};

function updateCartUI() {
    const cartContainer = document.getElementById("cartItems");
    const orderContainer = document.getElementById("orderItems");
    cartContainer.innerHTML = "";
    orderContainer.innerHTML = "";
    document.getElementById("cart-count").innerText = cart.reduce((sum, item) => sum + item.quantity, 0);

    let subtotal = 0;

    cart.forEach(item => {
        const total = item.price * item.quantity;
        subtotal += total;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${sanitize(item.name)}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${sanitize(item.name)}</h4>
                    <p class="cart-item-price">${item.price} x ${item.quantity} = ${total} SAR</p>
                    <div class="cart-item-actions">
                        <div class="cart-quantity">
                            <button onclick="changeCartQuantity('${item.id}', -1)">-</button>
                            <input type="number" value="${item.quantity}" min="1" readonly>
                            <button onclick="changeCartQuantity('${item.id}', 1)">+</button>
                        </div>
                        <button class="remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
                    </div>
                </div>
            </div>`;

        orderContainer.innerHTML += `
            <div class="order-item">
                <span class="order-item-name">${sanitize(item.name)}</span>
                <span class="order-item-quantity">x${item.quantity}</span>
                <span class="order-item-price">${total} SAR</span>
            </div>`;
    });

    const DELIVERY_FEE = 5;
    let total = subtotal + DELIVERY_FEE;
    document.getElementById("cartSubtotal").innerText = `${subtotal} SAR`;
    document.getElementById("cartTotal").innerText = `${total} SAR`;
    document.getElementById("orderSubtotal").innerText = `${subtotal} SAR`;
    document.getElementById("orderTotal").innerText = `${total} SAR`;
}

document.getElementById("deliveryForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser) {
        alert("Please log in to place an order.");
        document.getElementById("authModal").style.display = "block";
        return;
    }
    try {
        const order = {
            customer: {
                name: document.getElementById("fullName").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                address: document.getElementById("address").value,
                city: document.getElementById("city").value,
                zipCode: document.getElementById("zipCode").value,
                directions: document.getElementById("additionalDirections").value,
            },
            items: cart,
            payment: "cash",
            total: document.getElementById("orderTotal").innerText,
        };

        const response = await fetch("http://localhost:4000/api/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
            credentials: "include",
        });

        const result = await response.json();
        if (result.success) {
            cart = [];
            updateCartUI();
            document.getElementById("orderIdDisplay").innerText = result.orderId;
            document.getElementById("checkoutModal").style.display = "none";
            document.getElementById("orderConfirmationModal").style.display = "block";
        } else {
            if (result.errors) {
                const errorMessages = result.errors.map(err => err.msg).join(", ");
                throw new Error(errorMessages);
            }
            throw new Error(result.message || "Order failed");
        }
    } catch (error) {
        alert(`Failed to place order: ${error.message}. Please try again.`);
    }
});

// Auth Modal Handling
document.getElementById("order-now-btn").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("authModal").style.display = "block";
});

document.getElementById("user-account-link").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentUser) {
        logout();
    } else {
        document.getElementById("authModal").style.display = "block";
    }
});

document.getElementById("loginTab").addEventListener("click", () => {
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("registerTab").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById("authTitle").innerText = "Login";
});

document.getElementById("registerTab").addEventListener("click", () => {
    document.getElementById("registerTab").classList.add("active");
    document.getElementById("loginTab").classList.remove("active");
    document.getElementById("registerForm").classList.add("active");
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("authTitle").innerText = "Register";
});

document.getElementById("userLoginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const response = await fetch("http://localhost:4000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: "include", // Include cookies for JWT
        });
        const result = await response.json();
        if (result.success) {
            currentUser = { email, name: result.name };
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            updateUserUI();
            document.getElementById("authModal").style.display = "none";
            alert("Login successful!");
        } else {
            alert(result.message || "Login failed.");
        }
    } catch (error) {
        alert("Login failed: " + error.message);
    }
});

document.getElementById("userRegisterForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const phone = document.getElementById("registerPhone").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;

    if (!name || !email || !phone || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!/^\+?\d{10,}$/.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    try {
        const response = await fetch("http://localhost:4000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
            credentials: "include",
        });
        const result = await response.json();
        if (result.success) {
            currentUser = { email, name };
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            updateUserUI();
            document.getElementById("authModal").style.display = "none";
            alert("Registration successful! You are now logged in.");
        } else {
            alert(result.message || "Registration failed.");
        }
    } catch (error) {
        alert("Registration failed: " + error.message);
    }
});

// Form validation feedback
function addFormValidation(formId) {
    const form = document.getElementById(formId);
    form.querySelectorAll("input[required]").forEach(input => {
        input.addEventListener("input", () => {
            input.style.borderColor = input.value.trim() ? "" : "red";
        });
    });
}
addFormValidation("userLoginForm");
addFormValidation("userRegisterForm");

document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.dataset.category;
        renderMenu(category);
    });
});

const cartModal = document.getElementById("cartModal");
const checkoutModal = document.getElementById("checkoutModal");
const orderConfirmationModal = document.getElementById("orderConfirmationModal");
const authModal = document.getElementById("authModal");

document.querySelectorAll(".cart a")[0].addEventListener("click", (e) => {
    e.preventDefault();
    cartModal.style.display = "block";
    updateCartUI();
});

document.getElementById("continueShopping").addEventListener("click", () => {
    cartModal.style.display = "none";
});

document.getElementById("proceedToCheckout").addEventListener("click", () => {
    if (!currentUser) {
        alert("Please log in to proceed to checkout.");
        cartModal.style.display = "none";
        authModal.style.display = "block";
        return;
    }
    cartModal.style.display = "none";
    checkoutModal.style.display = "block";
});

document.getElementById("backToHome").addEventListener("click", () => {
    orderConfirmationModal.style.display = "none";
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
        document.querySelectorAll(".modal").forEach(modal => {
            modal.style.display = "none";
        });
    }
});

window.onload = () => {
    renderMenu("all");
    updateUserUI();
};

async function fetchMenu() {
    try {
        const response = await fetch("http://localhost:4000/api/menu", {
            credentials: "include",
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success) {
            const menuData = {};
            result.data.forEach(item => {
                if (!menuData[item.category]) menuData[item.category] = [];
                menuData[item.category].push(item);
            });
            return menuData;
        } else {
            throw new Error(result.message || "Failed to fetch menu");
        }
    } catch (error) {
        console.error("Error fetching menu:", error.message);
        alert(`Failed to load menu: ${error.message}. Using default data.`);
        return menuData; // Fallback to hardcoded data
    }
}

window.onload = async () => {
    menuData = await fetchMenu();
    renderMenu("all");
    updateUserUI();
};

document.querySelector(".mobile-menu-toggle").addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

function validateForm(formId) {
    const form = document.getElementById(formId);
    form.addEventListener("submit", (e) => {
        let valid = true;
        form.querySelectorAll("input[required]").forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = "red";
                valid = false;
            } else {
                input.style.borderColor = "";
            }
        });
        if (formId === "userRegisterForm") {
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("registerConfirmPassword").value;
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                valid = false;
            }
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                valid = false;
            }
        }
        if (!valid) e.preventDefault();
    });
}
validateForm("userLoginForm");
validateForm("userRegisterForm");
validateForm("deliveryForm");
