if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var totalAmount = "0,00"

function ready() {
    // Botão remover produto
    const removeCartProductButtons = document.getElementsByClassName("remove")
    for (var i = 0; i < removeCartProductButtons.length; i++) {
        removeCartProductButtons[i].addEventListener("click", removeProduct)
    }


    // Botão add produto ao carrinho
    const addToCartButtons = document.getElementsByClassName("buy-btn")
    for (var i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", addProductToCart)
    }

    // Botão comprar
    const purchaseButton = document.getElementsByClassName("purchase-button")[0]
    purchaseButton.addEventListener("click", makePurchase)
}

function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
}

function checkIfInputIsNull(event) {
    if (event.target.value === "0") {
        event.target.parentElement.parentElement.remove()
    }

    updateTotal()
}

//Alterar quantidade de produtos (+)
function add(e) {
    let quantidade = parseInt(e.parentElement.querySelector("p").innerText)
    e.parentElement.querySelector("p").innerText = quantidade + 1
    updateTotal()

}

//Alterar quantidade de produtos (-)
function remo(e) {
    let quantidade = parseInt(e.parentElement.querySelector("p").innerText)
    if (quantidade == 0) {
        e.parentElement.parentElement.parentElement.remove()
        updateTotal()
    }
    else {
        e.parentElement.querySelector("p").innerText = quantidade - 1
    }
    updateTotal()
}

function addProductToCart(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByName("product")[0].src
    const productName = productInfos.getElementsByClassName("title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("preco")[0].innerText

    const productsCartNames = document.getElementsByClassName("cart-product-title")
    for (var i = 0; i < productsCartNames.length; i++) {
        if (productsCartNames[i].innerText === productName) {
            productsCartNames[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
            updateTotal()
            return
        }
    }


    let newCartProduct = document.createElement("tr")
    newCartProduct.classList.add("cart-product")

    newCartProduct.innerHTML =
        `
        <td class="product-identification">
          <img src="${productImage}" alt="${productName}" class="cart-product-image">
          <strong class="cart-product-title">${productName}</strong>
        </td>
        <td>
          <span class="cart-product-price">${productPrice}</span>
        </td>
        <td>
          <input type="number" value="1" min="0" class="product-qtd-input">
          <button type="button" class="remove-product-button">Remover</button>
        </td>
      `

    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(newCartProduct)
    updateTotal()

    newCartProduct.getElementsByClassName("remove")[0].addEventListener("click", removeProduct)
}

function makePurchase() {
    if (totalAmount === "0,00") {
        alert("Seu carrinho está vazio!")
    } else {
        alert(
            `
          Obrigado pela sua compra!
          Valor do pedido: R$${totalAmount}\n
          Volte sempre :)
        `
        )

        document.querySelector(".cart-table tbody").innerHTML = ""
        updateTotal()
    }
}

// Atualizar o valor total do carrinho
function updateTotal() {
    const cartProducts = document.getElementsByClassName("cart-product")
    console.log(cartProducts[0].querySelector("#preco"))
    totalAmount = 0

    for (let i = 0; i < cartProducts.length; i++) {
        const productPrice = cartProducts[i].querySelector("#preco").innerText.replace("R$", "").replace(",", ".")
        const productQuantity = parseInt(cartProducts[i].querySelector(".quantidade").innerText)
        totalAmount += productPrice * productQuantity
    }

    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector("#total").innerText = "R$" + totalAmount
}

function message() {
    Swal.fire({
        icon: 'success',
        title: 'sucesso!',
        text: 'compra finalizada',
        color: "#d40b9f"
    }
    )
}
