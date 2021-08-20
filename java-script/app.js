//////////////MEMORY SECTION//////////////////
//buttons
document.getElementById('8gb').addEventListener
('click', function(){
    memory(00)
    totalCost()
})

document.getElementById('16gb').addEventListener
('click', function(){
    memory(80)
    totalCost()
})

//function
function memory(ram){
    const getMemory = document.getElementById('memory')
    getMemory.innerText = ram;
    const memoryPrice = getMemory.innerText
    return memoryPrice;
}

//////////////STORAGE SECTION//////////////////
//buttons
document.getElementById('256gb').addEventListener
('click', function(){
    storage(000)
    totalCost()
})

document.getElementById('512gb').addEventListener
('click', function(){
    storage(100)
    totalCost()
})

document.getElementById('1tb').addEventListener
('click', function(){
    storage(180)
    totalCost()
})

//function
function storage(rom){
    const getStorage = document.getElementById('storage')
    getStorage.innerText = rom;
    const storagePrice = getStorage.innerText;
    return storagePrice;
}

///////////////////////DELIVERY SECTION//////////////////////
//buttons
document.getElementById('25aug').addEventListener
('click', function(){
    delivery(0)
    totalCost()
})

document.getElementById('21aug').addEventListener
('click', function(){
    delivery(20)
    totalCost()
})
//function
function delivery(date){
    const getDate = document.getElementById('delivery')
    getDate.innerText = date;
    const deliveryCost = getDate.innerText;
    return deliveryCost;
}

////////////////TOTAL secton////////////////////
function totalCost(){
    const memoryPriceText = document.getElementById('memory').innerText;
    const memoryPrice = parseInt(memoryPriceText);
    const storagePriceText = document.getElementById('storage').innerText;
    const storagePrice = parseInt(storagePriceText);
    const deliveryCostText = document.getElementById('delivery').innerText;
    const deliveryCost = parseInt(deliveryCostText);
    const total = 1299 + memoryPrice + storagePrice + deliveryCost;
    const updatePriceTo = document.getElementById('total');
    updatePriceTo.innerText =total;
}

////////////PROMO CODE SECTION ////////////////
document.getElementById('submit').addEventListener
('click', function(){
    let getCode = document.getElementById('code').value;
    const code = "stevekaku";
    if(getCode.toLowerCase() == code ){
        const totalPriceText = document.getElementById('total').innerText;
        const totalPrice = parseInt(totalPriceText)
        const offerPrice = totalPrice * (80/100) ;
        console.log(offerPrice)
        document.getElementById('offer').innerText = offerPrice;
    }
    else{
        console.log('get your own kakku')
    }
    document.getElementById('code').value = '';
})
