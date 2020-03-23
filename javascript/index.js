var PromiseIs = new Promise(function(resolve,reject){
			console.log("Initial");
			return resolve("Is worked")
}).then(function(result){
			console.log(result+" "+"done");
}).catch(function(reject){
			console.log(reject+"failed");
});

	let myPromise= new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve("Success")
	},5000)
})
	myPromise.then(function(Success){
		console.log("yes"+" "+Success);
		alert(Success);
});

function makerequest(methode,url){
	return new Promise(function(resolve,reject){//promise retrun if success resolve or reject 
		var xml= new XMLHttpRequest();
		xml.open(methode,url,true);
		xml.send();
		xml.onload=function(){
			if(this.readyState === 4){
				if(this.status === 200){
					resolve(xml.response);
				}
			}
			else{
				reject("Error");
			}
		}
	});
}

var promise=makerequest("GET","https://jsonplaceholder.typicode.com/posts/1");
promise.then(function(data){
	console.log(data);
}).catch(function(erdata){
	console.log(erdata);
});