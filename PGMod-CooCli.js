// https://oopashaoo.github.io/PGMod-CookieClicker/PGMod-CooCli.js
// Game.LoadMod('https://oopashaoo.github.io/PGMod-CookieClicker/PGMod-CooCli.js');

Products = {

	prod0: {
		descr: 'Cursor',
		logPrice: () => { 
			console.log(this.descr, ' price: ', productPrice0.value); 
		},
		buy: () => { 
			console.log(this.descr, ' but done!'); 
			product0.click(); 
		},
	}
	
}




console.log('--- start ---');

Products.prod0.logPrice();
Products.prod0.buy();

console.log('---- end ----');