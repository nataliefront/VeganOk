class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        
        const html = `

                    <div class="navbar_shopping" onclick="headerPage.handlerOpenShoppingPage();"><i class="fas fa-shopping-bag"></i>${count}</div>
                     
            `;

            ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);