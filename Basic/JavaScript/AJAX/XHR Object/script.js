document.getElementById("btn").addEventListener("click", getProduct);
function getProduct() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'product.json', true);
    xhr.onprogress = () => { console.log("loading") };
    xhr.onload = () => {
        let product = JSON.parse(xhr.response);
        console.log(product);
    }
    xhr.send();

}