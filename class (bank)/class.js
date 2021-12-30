// TASK 1
class Account {
	constructor(name, accno, balance){
		this.name = name;
		this.accno = accno;
		this.balance = balance;
	}
	getbalance(){
		return ` The balance is: ${this.balance}`;
	}
	withdraw(amount){
	if(this.balance >= amount){
		this.balance = this.balance - amount;
		return this.getbalance();
		} else {
			return `Insufficient balance is: ${this.balance}`;
		
	}
}
	
	added(amount){
			this.balance = this.balance + amount;
			return this.getbalance();
			}
}


const ganesh = new Account("Ganesh", 101, 20000);
const vani = new Account("Vani", 102, 200000);
const gokul = new Account("Gokul", 103, 30000);

console.log(vani.added(10000)); //210000

console.log(gokul.withdraw(20000));

// Task2

const getCountries = () => {
	console.log("Getting countriesss...");
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "https://restcountries.com/v3.1/all");
	xhr.send();

	xhr.responseType = "json";

	xhr.onload = () => {
		const countries = xhr.response;
		const countriesName = countries.map((country) => country.name.common);
		console.log("FULL data", countries, countriesName);
		
		const populations = countries.filter(country => country.population > 10000000);
		// console.log(populations);
		const Name = populations.map((names) => names.name.common);
		console.log(Name);
		// const Spanish = countries.filter((language) => language.spa);
		// console.log(Spanish);
		// const languages = countries.filter(country => country.languages.spa);
		// console.log(languages);
		// const language = countries.map((country) => countries.languages.Spanish);
		// console.log(language);




	}
};
getCountries();
