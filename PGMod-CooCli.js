		// /*=====================================================================================
		// MOD HOOKS (will be subject to change, probably shouldn't be used yet)
		// =======================================================================================*/
		// //really primitive custom mods support - might not be of any use at all (could theoretically be used for custom upgrades and achievements I guess?)
		// Game.customChecks=[];//push functions into this to add them to the "check for upgrade/achievement conditions" that happens every few seconds
		// Game.customInit=[];//add to the initialization call
		// Game.customLogic=[];//add to the logic calls
		// Game.customDraw=[];//add to the draw calls
		// Game.customSave=[];//add to the save write calls (save to your own localstorage key)
		// Game.customLoad=[];//add to the save load calls
		// Game.customReset=[];//add to the reset calls
		// Game.customTickers=[];//add to the random tickers (functions should return arrays of text)
		// Game.customCps=[];//add to the CpS computation (functions should return something to add to the multiplier ie. 0.1 for an addition of 10 to the CpS multiplier)
		// Game.customCpsMult=[];//add to the CpS multiplicative computation (functions should return something to multiply by the multiplier ie. 1.05 for a 5% increase of the multiplier)
		// Game.customMouseCps=[];//add to the cookies earned per click computation (functions should return something to add to the multiplier ie. 0.1 for an addition of 10 to the CpS multiplier)
		// Game.customMouseCpsMult=[];//add to the cookies earned per click multiplicative computation (functions should return something to multiply by the multiplier ie. 1.05 for a 5% increase of the multiplier)
		// Game.customCookieClicks=[];//add to the cookie click calls
		// Game.customCreate=[];//create your new upgrades and achievements in there

		// Game.LoadMod=function(url)//this loads the mod at the given URL and gives the script an automatic id (URL "http://example.com/my_mod.js" gives the id "modscript_my_mod")
		// {
		// 	var js=document.createElement('script');
		// 	var id=url.split('/');id=id[id.length-1].split('.')[0];
		// 	js.setAttribute('type','text/javascript');
		// 	js.setAttribute('id','modscript_'+id);
		// 	js.setAttribute('src',url);
		// 	document.head.appendChild(js);
		// 	console.log('Loaded the mod '+url+', '+id+'.');
		// }
		
		// //replacing an existing canvas picture with a new one at runtime : Game.Loader.Replace('perfectCookie.png','imperfectCookie.png');
		// //upgrades and achievements can use other pictures than icons.png; declare their icon with [posX,posY,'http://example.com/myIcons.png']
		// //check out the "UNLOCKING STUFF" section to see how unlocking achievs and upgrades is done (queue yours in Game.customChecks)
		// //if you're making a mod, don't forget to add a Game.Win('Third-party') somewhere in there!
		
		// //IMPORTANT : all of the above is susceptible to heavy change, proper modding API in the works

		// const f1 = (name) => { 
		// 	return (...v) => {
		// 		console.log(name, ':::', v);
		// 	}
		// };

		// Game.customChecks.push = f1('customChecks');            
		// Game.customInit.push = f1('customInit');              
		// Game.customLogic.push = f1('customLogic');             
		// Game.customDraw.push = f1('customDraw');              
		// Game.customSave.push = f1('customSave');              
		// Game.customLoad.push = f1('customLoad');              
		// Game.customReset.push = f1('customReset');             
		// Game.customTickers.push = f1('customTickers');           
		// Game.customCps.push = f1('customCps');              
		// Game.customCpsMult.push = f1('customCpsMult');          
		// Game.customMouseCps.push = f1('customMouseCps');         
		// Game.customMouseCpsMult.push = f1('customMouseCpsMult');     
		// Game.customCookieClicks.push = f1('customCookieClicks');     
		// Game.customCreate.push = f1('customCreate');           


console.log(123);





