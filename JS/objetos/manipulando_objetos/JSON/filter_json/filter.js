//filter

const clients = require("./filter.json");

function apartmentsWithoutComplement(clients) {
    return clients.filter((client) => {
        return (client.address.apartment === true &&
            !client.address.hasOwnProperty("complement")
    );
    });
}

const apartments = apartmentsWithoutComplement(clients);
console.log(apartments);
