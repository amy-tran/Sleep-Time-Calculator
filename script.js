$(".submit").click(function() {
    let type = $(".typeInput").val();
    let yourName = $(".yourNameInput").val();
    let hours = $(".hoursSpentInput").val();
    hours = new Date("2050-1-1") - Date.now() / 1000 / 60 / 60 / 24;
    $(".results").append("Hi, " + type + " sleeper " + yourName + ", you would have slept " + hours + " hours by 2050!");
    $(".results").show();
});