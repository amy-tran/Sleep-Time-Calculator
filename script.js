$(".submit").click(function() {
    let type = $("input").val();
    let yourName = $(".yourName").val();
    let hours = $(".hoursSpentInput").val();
    $(".results").append("Hi," + type + yourName + ", you would have slept" + hours + "by 2050!");
    $(".results").show();
});