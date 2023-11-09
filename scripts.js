const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

function editPrice(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })

    return newValue
}


function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
            <li>
                <img src= ${product.src}>
                <p>${product.name}</p>
                <p class="item-price"> ${editPrice(product.price)}</p>
            </li>
            `
    })

    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((option) => ({
        ...option,//Spread Operator
        price: option.price * 0.9, //dar 10% de desconto
    }))

    showAll(newPrices)
}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
     <li>
        <p>O valor total dos itens é ${editPrice(totalValue)}</p>
     </li>
       
    `
}

function filterAllItens() {
    const productsVegan = menuOptions.filter((productVegan) => productVegan.vegan)

    showAll(productsVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions)) //para que o programa não abra a função diretamente na tela inial, é necessário criar uma função anônima para que seja executada somente quando clicar no botão.
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAllItens)
buttonFilterAll.addEventListener('click', filterAllItens)