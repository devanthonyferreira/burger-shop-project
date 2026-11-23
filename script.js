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
                    <button class="menu-item-button button-primary" aria-label="Adicionar ao carrinho" onclick="addToCart(${option.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            aria-hidden="true">
                            <path d="M16 5h6"/>
                            <path d="M19 2v6"/>
                            <path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18"/>
                            <path d="M4.564 5H12"/>
                            <path d="M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041"/>
                            <circle cx="18" cy="20" r="2"/>
                            <circle cx="8" cy="20" r="2"/>
                        </svg>
                    </button>
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