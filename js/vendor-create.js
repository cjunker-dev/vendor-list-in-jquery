//let id = $("#vid").val();
//should be onclick()


$().ready(()=>{
    console.log("jQuery is ready!");
    $("#create").click(() => {

        let vendor = {
            id: 0,
            code: $("#pcode").val(),
            name: $("#pname").val(),
            address: $("#paddress").val(),
            city: $("#pcity").val(),
            state: $("#pstate").val(),
            zip: $("#pzip").val(),
            phoneNumber: $("#pphone").val(),
            email: $("#pemail").val()
        }
        console.log(vendor);
        console.debug("vendor before:", vendor);
        vendorCreate(vendor)
            .done((res)=> {
                console.log("Create successful:",res);
            })
            .fail((err) => {
                console.error("Create failed:",err);
            });
    });
});