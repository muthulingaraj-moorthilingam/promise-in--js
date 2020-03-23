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

//fetch() API is promise-based API for making HTTPRequest

//in XMLHttpRequest using XMLHttpRequest() object ,in fetch browser come
//with global fetch() function that can use to make request
//fetch get methosd;
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(function(response){
	console.log(response);
	var data= response.json();
	return data;
})
.then(function(data){
	console.log(data);
});
//post methode

const name={
	title:"Life is very short namba always be happa"
};

fetch("https://jsonplaceholder.typicode.com/todos",{
	method:"POST",
	body:JSON.stringify(name),
	headers:{
		"Content-type":"application/json; charset=UTF-8"
	}
})
.then(function(response){
	return response.json();
})
.then(function(data){
	console.log(data);
});