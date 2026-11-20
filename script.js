const menuArray = menuOptions;
const cartModal = document.querySelector('#cart-modal')
const menuList = document.querySelector('.menu')
const buttonVisibility = document.querySelectorAll('.button-visibility')



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

const openModal = (modal) => {
    modal.showModal()
}

const closeModal = (modal) => {
    modal.close()
}