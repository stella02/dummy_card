
var cardList = [];

let fixLength = 3 ;// fix number of cards to show at one time
let backstep = 0 ; // backstep is used to ajust the time interval used in createCard()
let currentStart = 0; // current start index of the list

var cardContainer = document.getElementById("card-container");	
let warning = document.getElementById("warning");

// using fetch to get the dummy cards information for the 1st time.
let url = "http://localhost:3000/cards";

fetch(url)
.then( response => response.json())
.then( data=>{
		//console.log(data);
		cardList = data;
		
		
		
	})
.then( () => generateCardList(0));  // due to async operation, then () is used to call generateCardList()

// function used to create the list of fixed number of cards to show
function generateCardList(startInd){
	
	console.log("cardlist startind ", startInd);
	let listLength = cardList.length;
	

	let start = startInd || 0;
	start = start < 0 ? 0: start;
	//start = start + fixLength < listLength? start: (listLength - fixLength);
	currentStart = start;
	console.log("cardlist currentstart", currentStart )
	


	let end = start + fixLength;	
	
	cardContainer.innerHTML = '';
	
	// cardList.map((card, index) =>{
	// 	createCard(card, index)
		
	// })
	if (start > 0) {
		backstep = start;
	}

	for (let i = start; i< end; i++ ) {
		
			createCard(cardList[i], i);

		
	}


	
	

}

// function to create each card
function createCard (card, ind){
	
	let index = ind - backstep;
	

	//console.log("index = ", index);
	//console.log("currentStart = ", currentStart);

	// using setTimeout() to get different img for the list of cards.

	setTimeout(() => {
		console.log(card)
		let div = document.createElement('div')
		div.className = "card shadow";
		// div.className = "shadow";

		// Img section
		let img = document.createElement('img');
		img.src = card.image_url;


		// title section
		let title = document.createElement('div');
		title.className = "title";

		let div2 = document.createElement('div');
		div2.className = "titleImg";
		 
		let div3 = document.createElement('div');
		div3.className = "left-title";
		let p3_1 = document.createElement('p');
		p3_1.innerHTML = `${card.title} <br/> <p style="font: bold 12px Arial;color: #ADADAD; ">WHAT WILL YOU FIND HERE </p>`;
		p3_1.className = "p31";

		// let p3_2 = document.createElement('p');
		// p3_2.innerHTML = "WHAT WILL YOU FIND HERE";
		// p3_2.className = "p32";


		div3.appendChild(p3_1);
		// div3.appendChild(p3_2);



		title.appendChild(div2);
		title.appendChild(div3);


		// section of the last sentence 
		let p4 = document.createElement("p");
		p4.innerHTML = "Learn More";
		p4.className = "last-note";


		// content section
		let content = document.createElement('p');
		content.innerHTML = `${card.text}`;
		content.className = "content";

		div.appendChild(img);
		div.appendChild(title);
		div.appendChild(content);
		div.appendChild(p4);

		cardContainer.appendChild(div);

	}, 500*index)


		
	

}


function next (){
	console.log("next");
	console.log(currentStart + 1);
	warning.innerHTML = "";


	if(currentStart == cardList.length - fixLength){
		warning.innerHTML = "no more next cards";
		generateCardList(currentStart);
		return;
	}
	
	generateCardList(currentStart + 1);

}

function prev(){
	console.log("prev")
	console.log(currentStart + 1)
	warning.innerHTML = "";

	if(currentStart == 0){
		warning.innerHTML = "no more previous cards";
		generateCardList(0);
		return;
	}

	

	generateCardList(currentStart - 1);
}



module.exports.prev = prev;
module.exports.next = next; 

                   