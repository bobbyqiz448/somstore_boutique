// Add products to <table>
function productsAdd() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }
    
    // Append product to the table
    $("#productTable tbody").append("<tr>" +
        "<td>Extending Bootstrap with CSS, JavaScript and jQuery</td>" +
        "<td>6/11/2015</td>" +
        "<td>http://bit.ly/1SNzc0i</td>" +
        "</tr>");
        
    $("#productTable tbody").append("<tr>" +
        "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
        "<td>1/29/2015</td>" +
        "<td>http://bit.ly/1I8ZqZg</td>" +
        "</tr>");
}

document.addEventListener("click",productsAdd,false);//fire event when page loads


var asyncRequest;
let url = 'http://127.0.0.1:5500/data.json';
let myResponse ;



try {
    asyncRequest = new XMLHttpRequest();        
    asyncRequest.onreadystatechange = myFunc;
    asyncRequest.open('GET',url,true);
    asyncRequest.send(null); 

} catch (exception) {
    alert("Request failed")
    
}


function myFunc(){
    
    if (asyncRequest.readyState==4 && asyncRequest.status==200) {
        
        myResponse = JSON.parse(asyncRequest.responseText);
        
        
        
        console.log(myResponse.name);
        
        
    } 

}