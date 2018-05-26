class Locations {
	constructor(public Name, public Adress, public ZipCode, public City, public Images){
	}
}


class Places extends Locations {

	constructor(Name, Adress, ZipCode, City, Images, type){
		super(Name, Adress, ZipCode, City, Images);
	}
}


class Restaurants extends Locations {

	constructor(Name, Adress, ZipCode, City, Images, RestType, PhoneNumb, type){
		super(Name, Adress, ZipCode, City, Images);
		this.RestType = RestType;
		this.PhoneNumb = PhoneNumb;
	}
}


class Events extends Locations {

	constructor(Name, Adress, ZipCode, City, Images, EventDate, EventPrice, type){
		super(Name, Adress, ZipCode, City, Images);
		this.EventDate = EventDate;
		this.EventPrice = EventPrice;
	}
}


let place1 = new Places("St. Charles Church", "Karlsplatz 1", "1010", "Vienna", "img/place1.jpg", Places)
let place2 = new Places("Zoo Vienna", "Maxingstraße 13b", "1130", "Vienna", "img/place1.jpg", Places)
let events1 = new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "1150", "Vienna", "imgsource", "Fr., 15. Jun. 20:00", "58,50 EUR", Events)
let events2 = new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "1150", "Vienna", "imgsource", "Sat, 09.06.2018 - 19:30", "€ 47,80", Events)
let restaurant1 = new Restaurants("Lemon Leaf", "Kettenbrückengasse 19", "1050", "Vienna", "imgsource", "Thai", "+43(1)5812308", Restaurants)
let restaurant2 = new Restaurants("SIXTA", "Schönbrunner Straße 21", "1050", "Vienna", "imgsource", "wienerisch", "+43 1 58 528 56, +43 1 58 528 56", Restaurants)


let locations_data = []
	locations_data.push(place1, place2, events1, events2, restaurant1, restaurant2);


function render(){
    var i;
	for (i=0;i<locations_data.length;i++){

	var insText = document.createElement("div");
	 
 	insText.classList.add("col-lg-3");
 	insText.classList.add("col-md-6");
	insText.classList.add("col-sm-12");
	insText.classList.add("card");
	 
 	var row = document.getElementById("row4");
 	row.appendChild(insText);
 	var headline = document.createElement("h3");
 	var headline_text = document.createTextNode(locations_data[i].Name);
 	headline.appendChild(headline_text);
	insText.appendChild(headline);
	 
 	var Adress = document.createElement("p");
 	var Adress_text = document.createTextNode(locations_data[i].Adress);
 	Adress.appendChild(Adress_text);
	insText.appendChild(Adress);
	 
	var ZipCode = document.createElement("p");
	var ZipCode_text = document.createTextNode(locations_data[i].ZipCode);
	ZipCode.appendChild(ZipCode_text);
   insText.appendChild(ZipCode);

 	var City = document.createElement("p");
 	var City_text = document.createTextNode(locations_data[i].City);
 	City.appendChild(City_text);
	insText.appendChild(City);

	var RestType = document.createElement("p");
	var RestType_text = document.createTextNode(locations_data[i].RestType);
	RestType.appendChild(RestType_text);
   insText.appendChild(RestType);

   var PhoneNumb = document.createElement("p");
   var PhoneNumb_text = document.createTextNode(locations_data[i].PhoneNumb);
   PhoneNumb.appendChild(PhoneNumb_text);
  insText.appendChild(PhoneNumb);

  var EventDate = document.createElement("p");
  var EventDate_text = document.createTextNode(locations_data[i].EventDate);
  EventDate.appendChild(EventDate_text);
 insText.appendChild(EventDate);

 var EventPrice = document.createElement("p");
 var EventPrice_text = document.createTextNode(locations_data[i].EventPrice);
 EventPrice.appendChild(EventPrice_text);
insText.appendChild(EventPrice);

	}
}

render();