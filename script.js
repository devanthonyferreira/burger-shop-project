const menuArray = menuOptions;
const menuList = document.querySelector('.menu')
const buttonVisibility = document.querySelectorAll('.button-visibility')



const showMenu = (list) => {

    buttonVisibility.forEach(button => {
        button.style.visibility = "visible"
    })

    menuList.innerHTML = ""

    list.forEach(option => {
        const listItem =
            `<li>
                <img src="${option.src}" alt="${option.name}">
                <p>${option.name}</p>
                <p class="price">R$ <span>${option.price}</span></p>
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
