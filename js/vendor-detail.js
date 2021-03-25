let vendor = null;

$().ready(() => {
    vendorDetail(5)
        .done((vendor) => {
            vendor = vendor;
            display(vendor);
        })
});

const display = (vendor) => {
    $("#pid").text(vendor.id);
    $("#pcode").text(vendor.code);
    $("#pname").text(vendor.name);
    $("#paddress").text(vendor.address);
    $("#pcity").text(vendor.city);
    $("#pstate").text(vendor.state);
    $("#pname").text(vendor.email);
    $("#pname").text(vendor.email);

}