const fs = require('fs');
const path = require('path');
const {uniqueNamesGenerator, names} = require('unique-names-generator');

const TOTAL_ORDERS = 150;

const CHARS = new Array(26)
                .fill(65)
                .map((n,i) => String.fromCharCode(n+i));

const DATES_BEFORE = new Array(5)
                        .fill(new Date())
                        .map((d0,i) => {
                            const d = new Date(d0);
                            d.setDate(d.getDate() - (i + 1));                            
                            return d.toDateString();
                        });
const DATES_AFTER = new Array(5)
                        .fill(new Date())
                        .map((d0,i) =>{
                            const d = new Date(d0);
                            d.setDate(d.getDate() + (i + 1));                            
                            return d.toDateString();
                        });
                      

const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const ORDER_STATUS = [
    'Shipped', 'Cancelled', 'Pending'
]

const generateName = () => {
    return uniqueNamesGenerator({
        dictionaries: [names, CHARS, names],
        separator: ' ',
        length: 3
    })
}

const generateOrderStatus = () => {
    return uniqueNamesGenerator({
        dictionaries: [ORDER_STATUS],
    })
}

const generatePickupDate = (orderStatus) => {
    if(orderStatus == 'Pending'){
        return getRandomItem(DATES_AFTER);
    }else{
        return getRandomItem(DATES_BEFORE);
    }
}


const getAnOrder = (orderId) => {
    const orderStatus = generateOrderStatus();
    return {
        orderId,
        vendorName: generateName(),
        orderStatus,
        pickUpDate: generatePickupDate(orderStatus)
    }
}

const init = () => {
    const orders = new Array(TOTAL_ORDERS)
                        .fill()
                        .map((_,i) => getAnOrder(i+1))
    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify({orders}, null, 2));
    console.log(`Done Generating ${TOTAL_ORDERS} orders data - check db.json`);
}

init();