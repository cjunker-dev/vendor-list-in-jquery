//let id = $("#vid").val();
//should be onclick()


$().ready(()=>{
    console.log("jQuery is ready!");
    $("button").click(() => {

        let newVendor = {
            id: $("#pid").val(),
            code: $("#pcode").val(),
            name: $("#pname").val(),
            address: $("#paddress").val(),
            city: $("#pcity").val(),
            state: $("#pstate").val(),
            zip: $("#pzip").val(),
            phoneNumber: $("#pphone").val(),
            email: $("#pemail").val()
        }
        console.log(newVendor);
        $.ajax({
            method: "POST",
            url: url,
            data: JSON.stringify(newVendor),
            contentType: 'application/json'
    })
        .done((res)=> {
            console.log(res);
        })
        .fail((err) => {
            console.error(err);
        });
    });
});