$(document).ready(function(){
    $("#des").click(function(event){
        $("#dt").show()
        $("#des").hide()
    })
    $("#dt").click(function(){
        $("#des").show()
        $("#dt").hide()
    })


    $("#dev").click(function(){
        $("#devt").show()
        $("#dev").hide()
    })
    $("#devt").click(function(){
        $("#dev").show()
        $("#devt").hide()
    })


    $("#pm").click(function(){
        $("#pt").show()
        $("#pm").hide()
    })
    $("#pt").click(function(){
        $("#pm").show()
        $("#pt").hide()
    })



    $("form").submit(function(){
        var name = $("#name").val()
        if(name != ""){
            alert(name + " we have received your message. Thank you for reaching out to us")
        }else{
            alert("Fill in the form below")
        }
        event.preventDefault()
    })

    $("img").hover(function(){
        $("img").text("gg")
    })
})