
const fromDropdown = document.getElementById("from-currency-select");
const toDropdown = document.getElementById("to-currency-select");
const result = document.getElementById("result");

//create dropdown from the currencies array
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropdown.add(option);
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropdown.add(option);
});

//setting default values
fromDropdown.value = "USD";
toDropdown.value = "INR";

let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropdown.value;
    const toCurrency = toDropdown.value;

    //If amount input field is not empty
    if(amount.length !=0){
        let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
        
        fetch(api).then(resp => resp.json()).then((data) => {
            let fromExchangeRate = data.conversion_rates[fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount/fromExchangeRate) * toExchangeRate;
            result.innerHTML  = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        });
    }
    else{
        alert("Please fill in the amount!")
    }
};

document.querySelector("#convert-btn").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);