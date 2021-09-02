var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var searchProductInput = document.getElementById("searchProduct");
var addArr = [];


if (JSON.parse(localStorage.getItem("ourProduct")) != null) {
    addArr = JSON.parse(localStorage.getItem("ourProduct"));
    displayProduct();
}


function addProduct()

{



    if (validationProduct() == true) {
        var productObject = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            description: productDescriptionInput.value
        }
        addArr.push(productObject);

        localStorage.setItem("ourProduct", JSON.stringify(addArr));
        displayProduct();

        clearForm();
    } else {
        window.alert("All inputs requires")
    }
}


function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
}


function displayProduct() {
    var cortonaa = "";
    for (var i = 0; i < addArr.length; i++) {
        cortonaa += `   <tr>
       <td>${[i]}</td>
       <td>${addArr[i].name}</td>
       <td>${addArr[i].price}</td>
       <td>${addArr[i].category}</td>
       <td>${addArr[i].description}</td>
       <td>
           <button onClick="updateProduct(${i})" class="btn btn-warning"> update</button>
       </td>
       <td>
           <button class="btn btn-danger"onClick="deleteProduct(${i})">delete</button>
       </td>
   </tr>`;
    }
    document.getElementById("table-Body").innerHTML = cortonaa;
}


function validationProduct() {
    if (productNameInput.value != "" && productPriceInput.value != "" && productCategoryInput.value != "" && productDescriptionInput.value != "") {
        return true;
    } else {
        return false;
    }
}





function deleteProduct(index) {
    addArr.splice(index, 1);
    displayProduct();
    localStorage.setItem("ourProduct", JSON.stringify(addArr));
}



function searchProduct(x) {

    var cortonaa = "";
    for (i = 0; i < addArr.length; i++) {
        if (addArr[i].name.toLowerCase().includes(x.toLowerCase()) == true) {


            cortonaa += `   <tr>
           <td>${[i]}</td>
           <td>${addArr[i].name}</td>
           <td>${addArr[i].price}</td>
           <td>${addArr[i].category}</td>
           <td>${addArr[i].description}</td>
           <td>
               <button onClick="updateProduct(${i})" class="btn btn-warning"> update</button>
           </td>
           <td>
               <button class="btn btn-danger"onClick="deleteProduct(${i})">delete</button>
           </td>
       </tr>`;

        }
    }
    document.getElementById("tableBody").innerHTML = cortonaa;
}



function updateProduct(index) {

    productNameInput.value = addArr[index].name;
    productPriceInput.value = addArr[index].price;
    productCategoryInput.value = addArr[index].category;
    productDescriptionInput.value = addArr[index].description;
    document.getElementById("addBtn").innerHTML = "update product";
}