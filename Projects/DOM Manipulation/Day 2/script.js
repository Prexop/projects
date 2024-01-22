let products = [
    {
        name: "Samsung S23 Ultra",
        price: 270000
    },
    {
        name: "Iphone 15 Pro Max",
        price: 250000
    },
    {
        name: "Google Pixel 5",
        price: 150000
    }
]

for(let i=0;i<products.length;i++)
{
    let pro = document.createElement("div");
    pro.classList.add("product");

    let pname = document.createElement("h2");
    pname.innerText = products[i].name;

    let pprice = document.createElement("h3");
    pprice.innerText = products[i].price;

    let btn = document.createElement("button");
    btn.innerText = "Buy";

    btn.addEventListener("click",function(){
        console.log(products[i]);
    })

    pro.appendChild(pname);
    pro.appendChild(pprice);
    pro.appendChild(btn)
    document.getElementById("parent").appendChild(pro);
}

