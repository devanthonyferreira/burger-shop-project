const menuArray = menuOptions;
const menuList = document.querySelector('.menu')


const showMenu = () => {
    menuList.innerHTML = ""

    menuArray.forEach(option => {
        const listItem =
            `<li>
                <img src="${option.src}" alt="${option.name}">
                <p>${option.name}</p>
                <p class="price">R$ <span>${option.price}</span></p>
            </li>`;

        menuList.innerHTML += listItem
    })
};