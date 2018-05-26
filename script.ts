class Locations {
	constructor(public Name, public Adress, public ZipCode, public City, public ListPrice){
	}
}



class Places extends Locations {

	constructor(Name, Adress, ZipCode, City, ListPrice, type){
		super(Name, Adress, ZipCode, City, ListPrice);
	}
}


class Restaurants extends Locations {

	constructor(Name, Adress, ZipCode, City, ListPrice, type){
		super(Name, Adress, ZipCode, City, ListPrice);
	}

}


class Events extends Locations {

	constructor(Name, Adress, ZipCode, City, ListPrice, type){
		super(Name, Adress, ZipCode, City, ListPrice);
	}

}


let place1 = new Places("St. Charles Church", "Karlsplatz 1", "1010", "Vienna", 25000, Places)
let place2 = new Places("Zoo Vienna", "Maxingstraße 13b", "1130", "Vienna", 50000, Places)
let events1 = new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "1150", "Electric", 35000, Events)
let events2 = new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "1150", "Diesel",20000, Events)
let restaurant1 = new Restaurants("Lemon Leaf", "Kettenbrückengasse 19", "1050", "Patrol", 110000, Restaurants)
let restaurant2 = new Restaurants("SIXTA", "Schönbrunner Straße 21", "1050", "Patrol", 150000, Restaurants)


let locations_data= []
	locations_data.push(place1, place2, events1, events2, restaurant1, restaurant2);


function createDOM (){
    var i;
	for (i=0;i<locations_data.length;i++){

	 var dummy = document.createElement("div");
	 
 	dummy.classList.add("card");
 	dummy.classList.add("col-lg-4");
 	dummy.classList.add("col-md-6");
	 dummy.classList.add("col-sm-12");
	 
 	var row = document.getElementById("row4");
 	row.appendChild(dummy);
 	var headline = document.createElement("h4");
 	var headline_text = document.createTextNode(locations_data[i].Name);
 	headline.appendChild(headline_text);
	dummy.appendChild(headline);
	 
 	var ZipCode = document.createElement("p");
 	var ZipCode_text = document.createTextNode(locations_data[i].ZipCode);
 	ZipCode.appendChild(ZipCode_text);
	dummy.appendChild(ZipCode);
	 
 	var Adress = document.createElement("p");
 	var Adress_text = document.createTextNode(locations_data[i].Adress);
 	Adress.appendChild(Adress_text);
	dummy.appendChild(Adress);
	 
 	var City = document.createElement("p");
 	var City_text = document.createTextNode(locations_data[i].City);
 	City.appendChild(City_text);
	dummy.appendChild(City);
	 
	}
}



createDOM();


function createTabs (arr, x){
    var i;
	for (i=0;i<arr.length;i++){
	var dummy = document.createElement("div");
 	dummy.classList.add("card");
 	dummy.classList.add("col-lg-4");
 	dummy.classList.add("col-md-6");
 	dummy.classList.add("col-sm-12");
 	var row = document.getElementById(`row${x}`);
	 row.appendChild(dummy);
	 
 	var headline = document.createElement("h4");
 	var headline_text = document.createTextNode(arr[i].Name);
 	headline.appendChild(headline_text);
	 dummy.appendChild(headline);
	 
 	var ZipCode = document.createElement("p");
 	var ZipCode_text = document.createTextNode(arr[i].ZipCode);
 	ZipCode.appendChild(ZipCode_text);
	 dummy.appendChild(ZipCode);
	 
 	var Adress = document.createElement("p");
 	var Adress_text = document.createTextNode(arr[i].Adress);
 	Adress.appendChild(Adress_text);
	 dummy.appendChild(Adress);
	 
 	var City = document.createElement("p");
 	var City_text = document.createTextNode(arr[i].City);
 	City.appendChild(City_text);
	 dummy.appendChild(City);
 
	}
}

// var places_data = locations_data.filter(x=>x.type=="Places")
// var events_data = locations_data.filter(x=>x.type=="Events")
// var restaurants_data = locations_data.filter(x=>x.type=="Restaurants")

// createTabs(events_data, 0); 
// createTabs(places_data, 1);
// createTabs(restaurants_data, 2);


// let tags = document.getElementsByTagName("button");

// for (let i=0; i<tags.length; i++){
// 	tags[i].addEventListener("click", function(){
// 	var result = locations_data[i].calculatePrice()
// 	(`.card:eq(${i})`).append(`<p>${result}</p>`);
// 	},{once:true});
// }



