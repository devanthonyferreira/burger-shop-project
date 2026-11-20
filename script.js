const menuArray = menuOptions;
const menuList = document.querySelector('.menu')
const cartModal = document.querySelector('#cart-modal')
const cartEmpty = document.querySelector('.cart-empty')
const cartContent = document.querySelector('.cart-content')
const buttonVisibility = document.querySelectorAll('.button-visibility')

let cart = []

const showMenu = (list) => {

    buttonVisibility.forEach(button => {
        button.style.visibility = "visible"
    })

    menuList.innerHTML = ""

    list.forEach(option => {
        const listItem =
            `<li class="menu-item">
                <img class="menu-item-image" src="${option.src}" alt="${option.name}">
                <p class="menu-item-name">${option.name}</p>
                <p class="menu-item-price">R$ ${option.price}</p>
            </li>`;

        menuList.innerHTML += listItem
    })
};

const openModal = (modal) => {
    modal.showModal()
}

const closeModal = (modal) => {
    modal.close()
}

const renderCart = () => {
    if (cart.length === 0) {
        cartEmpty.classList.remove('hidden')
    } else {
        cartEmpty.classList.add('hidden')
    }

    openModal(cartModal)
}

const applyDiscount = () => {

    const newMenu = menuArray.map(option => {
        const discountedOption = { ...option, price: option.price * 0.9 }

        return discountedOption
    })

    showMenu(newMenu)
}

const filterVegan = () => {

    const veganFilter = menuArray.filter(option => option.vegan)

    showMenu(veganFilter)
}