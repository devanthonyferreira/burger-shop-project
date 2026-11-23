// DOM Elements

const menuList = document.querySelector('.menu')
const cartModal = document.querySelector('#cart-modal')
const cartEmpty = document.querySelector('.cart-empty')
const cartList = document.querySelector('.cart-list')

// State

let cart = []

// Menu

const showMenu = (list) => {
    const menuItems = list.map(option => {
        return `<li class="menu-item">
                    <img class="menu-item-image" src="${option.src}" alt="${option.name}">
                    <p class="menu-item-name">${option.name}</p>
                    <p class="menu-item-price">R$ ${option.price}</p>
                    <button class="button-primary" onclick="addToCart(${option.id})">Adicionar ao carrinho</button>
                </li>`
    }).join('')

    menuList.innerHTML = menuItems
}

// Modal

const openModal = (modal) => {
    modal.showModal()
}

const closeModal = (modal) => {
    modal.close()
}

// Cart

const renderCart = () => {
    if (cart.length === 0) {
        cartEmpty.classList.remove('hidden')
        cartList.innerHTML = ''
    } else {
        cartEmpty.classList.add('hidden')

        const cartItems = cart.map(item => {
            return `<li class="cart-item">
                        <img class="cart-item-image" src="${item.src}" alt="${item.name}">
                        <p class="cart-item-name">${item.name}</p>
                        <p class="cart-item-price">R$ ${item.price}</p>
                    </li>`
        }).join('')

        cartList.innerHTML = cartItems
    }

    openModal(cartModal)
}

const addToCart = (id) => {
    const selectedItem = menuOptions.find(option => option.id === id)
    cart.push(selectedItem)
}

// Init

showMenu(menuOptions)