// DOM Elements

const menuList = document.querySelector('.menu')
const cartModal = document.querySelector('#cart-modal')
const cartEmpty = document.querySelector('.cart-empty')
const cartContent = document.querySelector('.cart-content')

// State

let cart = []

// Menu

const showMenu = (list) => {
    const menuItems = list.map(option => {
        return `<li class="menu-item">
                    <img class="menu-item-image" src="${option.src}" alt="${option.name}">
                    <p class="menu-item-name">${option.name}</p>
                    <p class="menu-item-price">R$ ${option.price}</p>
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
    } else {
        cartEmpty.classList.add('hidden')
    }

    openModal(cartModal)
}

// Init

showMenu(menuOptions)