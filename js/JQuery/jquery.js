//Question 1. Create a button, on click of which you should be able to hide a paragraph text, create another button onclick of which this paragrpah should be visisble

$('#button1').click(function(){
    $("p").hide();
});

$("#button2").click(function(){
    $("p").show();
})

//Question 2. Create an AJAX call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$(".button3").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success: function(data){
            console.log(data);
            document.getElementById("heading").innerText = data.title;
        }
    })
})