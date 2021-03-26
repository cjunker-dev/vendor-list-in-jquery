let newVendor = {
    id: 0, 
    code: "code",
    name: "name",
    address: "address",
    city: "city",
    state: "state",
    zip: "zip",
    phoneNumber: "phoneNumber",
    email: "email"
}

let allVendors = [];
$().ready(() => {
    vendorList()
        .done((vendors) => {
            allVendors = vendors;
            display(allVendors);
        })
}
);
const display = (vendors) => {
    let tbody = $("tbody");
    tbody.empty();
    for (let vendor of vendors) {
        let tr = $("<tr></tr>");
        tr.append($(`<td>${vendor.id}</td>`));
        //in one statement
        tr.append($(`<td>${vendor.code}</td>`));
        tr.append($(`<td>${vendor.name}</td>`));
        let tdAddr = $(`<td>${vendor.address}, ${vendor.city}, ${vendor.state} ${vendor.zip}</td>`);
        tr.append(tdAddr);
        tr.append($(`<td>${vendor.phoneNumber}</td>`));
        tr.append($(`<td>${vendor.email}</td>`));

        tbody.append(tr);
    }
}

