// https://oopashaoo.github.io/PGMod-CookieClicker/PGMod-CooCli.js
// Game.LoadMod('https://oopashaoo.github.io/PGMod-CookieClicker/PGMod-CooCli.js');

// Products = {

// 	prod0: {
// 		descr: 'Cursor',
// 		logPrice: () => { 
// 			console.log(this.descr, ' price: ', productPrice0.innerHTML); 
// 		},
// 		buy: () => { 
// 			console.log(this.descr, ' but done!'); 
// 			product0.click(); 
// 		},
// 	}

// }


// Game.ObjectsById[5].
// Game.UpgradesById[76]


console.log('--- start ---');

// Products.prod0.logPrice();
// Products.prod0.buy();
Game.ObjectsById[0].bulkPrice;
Game.ObjectsById[0].buy();

console.log('---- end ----');



///

// Game.Object {id: 5, name: "Bank", displayName: "Bank", single: "bank", plural: "banks", …}
// actionName
// :
// "banked"
// amount
// :
// 8
// art
// :
// {base: "bank", xV: 8, yV: 4, w: 56, rows: 1, …}
// baseCps
// :
// 1400
// basePrice
// :
// 1400000
// bought
// :
// 8
// bulkPrice
// :
// 4282633
// buy
// :
// ƒ (amount)
// buyFree
// :
// ƒ (amount)//unlike getFree, this still increases the price
//  {
//  for (var i=0;i<amount;i++)
// buyFunction
// :
// ƒ ()
// canvas
// :
// canvas#rowCanvas5.rowCanvas
// cps
// :
// ƒ (me)
// ctx
// :
// CanvasRenderingContext2D {canvas: canvas#rowCanvas5.rowCanvas, globalAlpha: 1, globalCompositeOperation: "source-over", filter: "none", imageSmoothingEnabled: true, …}
// desc
// :
// "Generates cookies from interest."
// displayName
// :
// "Bank"
// draw
// :
// ƒ ()
// eachFrame
// :
// 0
// extraName
// :
// "Interest rates [X]% better"
// extraPlural
// :
// "Interest rates [X]% better"
// free
// :
// 0
// getFree
// :
// ƒ ()
// getFreeRanks
// :
// ƒ ()
// getPrice
// :
// ƒ (n)
// getReverseSumPrice
// :
// ƒ (amount)//return how much you'd get from selling [amount] of this building
//  {
//  var price=0;
//  for (var i=Math.max(0,(this.amount)-amount);i<Math.max(0,this.amount);i++)
// getSellMultiplier
// :
// ƒ ()
// getSumPrice
// :
// ƒ (amount)//return how much it would cost to buy [amount] more of this building
//  {
//  var price=0;
//  for (var i=Math.max(0,this.amount);i<Math.max(0,(this.amount)+amount);i++)
// icon
// :
// 6
// iconColumn
// :
// 15
// id
// :
// 5
// l
// :
// div#product5.product.unlocked.enabled
// level
// :
// 0
// levelAchiev10
// :
// Game.Achievement {id: 312, name: "A capital idea", desc: "Reach level <b>10</b> banks.", baseDesc: "Reach level <b>10</b> banks.", icon: Array(2), …}
// levelTooltip
// :
// ƒ ()
// levelUp
// :
// ƒ ()
// locked
// :
// 0
// minigameLoaded
// :
// false
// minigameName
// :
// 0
// minigameSave
// :
// 0
// minigameUrl
// :
// 0
// mute
// :
// ƒ (val)
// muted
// :
// 0
// n
// :
// 5
// name
// :
// "Bank"
// onMinigame
// :
// false
// pics
// :
// (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// plural
// :
// "banks"
// price
// :
// 4282633
// rebuild
// :
// ƒ ()
// redraw
// :
// ƒ ()
// refresh
// :
// ƒ ()//show/hide the building display based on its amount, and redraw it
//  {
//  this.price=this.getPrice();
//  if (Game.buyMode==1) this.bulkPrice=this.getSumPrice(Game.buyBulk);
//  else if (Game.buyMode==-1 && Game.buyBulk==-1) this.bulkPrice=this.getReverseSumPrice(1000);
//  else if (Game.buyMode==-1) this.bulkPrice=this.getReverseSumPrice(Game.buyBulk);
//  this.rebuild();
//  if (this.amount==0 && this.id!=0) l('row'+this.id).classList.remove('enabled');
//  else if (this.amount>0 && this.id!=0) l('row'+this.id).classList.add('enabled');
//  if (this.muted>0 && this.id!=0)
// sacrifice
// :
// ƒ (amount)//sell without getting back any money
//  {
//  var success=0;
//  //var moni=0;
//  var sold=0;
//  if (amount==-1) amount=this.amount;
//  if (!amount) amount=1;
//  for (var i=0;i<amount;i++)
// sell
// :
// ƒ (amount,bypass)
// single
// :
// "bank"
// storedCps
// :
// 1400
// storedTotalCps
// :
// 11200
// switchMinigame
// :
// ƒ (on)//change whether we're on the building's minigame
//  {
//  if (!Game.isMinigameReady(this)) on=false;
//  if (on==-1) on=!this.onMinigame;
//  this.onMinigame=on;
//  if (this.id!=0)
// synergies
// :
// (4) [G…e.Upgrade, G…e.Upgrade, G…e.Upgrade, G…e.Upgrade]
// tieredAchievs
// :
// (12) [empty, G…e.Achievement, G…e.Achievement, G…e.Achievement, G…e.Achievement, G…e.Achievement, G…e.Achievement, G…e.Achievement, G…e.Achievement, G…e.Achievement, G…e.Achievement, G…e.Achievement]
// tieredUpgrades
// :
// (12) [empty, G…e.Upgrade, G…e.Upgrade, G…e.Upgrade, G…e.Upgrade, G…e.Upgrade, G…e.Upgrade, G…e.Upgrade, G…e.Upgrade, G…e.Upgrade, G…e.Upgrade, G…e.Upgrade]
// tooltip
// :
// ƒ ()
// totalCookies
// :
// NaN
// vanilla
// :
// 1