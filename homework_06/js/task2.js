const eurRate = 33.8565;
const usdRate = 27.4609;
let usdInEur = eurRate / usdRate;
usdInEur = usdInEur.toFixed(4);


const eur = parseFloat(prompt("Enter ammount of euros"));
const usd = parseFloat(prompt('Enter ammount of dollars'));
if (usd < 0 || eur < 0 || isNaN(usd) || isNaN(eur)) {
    console.log('incorrect data');
} else {
    eurosConverted = Math.round(eur * eurRate);
    dollarsConverted = Math.round(usd * usdRate);
    console.log(`${eur} euros are equal ${eurosConverted} UAH, ${usd} dollars are equal ${dollarsConverted} UAH, one euro is equal ${usdInEur} dollars.`);
}