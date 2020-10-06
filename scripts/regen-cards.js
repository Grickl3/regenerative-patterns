


const Card = function(pattern, number, description, type, author, questions) {
	this.pattern = pattern;
	this.number = number;
	this.description = description;
	this.type = type;
	this.author = author;
	this.questions = questions;
}

let shoeBox = [];

// VISIONS FOR A PERMANENT CULTURE

	let theLongGame = new Card("The Long Game", 1, "Meaningful change is a long process, often outlasting our own lifespans. Practice and recognize the importance of small victories.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theLongGame);

	let biophilia = new Card("Biophilia", 2, "Humans coevolved with other species, and we are not whole without their presence", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(biophilia);

// PATTERNS OF JUSTICE AND RESISTANCE

	let decolonization = new Card("Decolonization", 17, "Our society will never heal until we identify and transform the internal, interpersonal, institutional, and ideological structures that systematically marginalize members of a culture.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(decolonization);

	let tellingTheStory = new Card("Telling the Story", 18, "Unlock the power of age old narratives to understand and share your thoughts about the world around you.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(tellingTheStory);

// ORGANIZATIONS THAT LIVE

	let nurturedNetworks = new Card("Nurtured Networks", 40, "Horozontally structured groups can be more innovative and resilient than hierarchies — but only if they are thoughtfully designed.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(nurturedNetworks);

	let consensualHierarchies = new Card("Consensual Hierarchies", 41, "In order to stay equitable, hierarchical organizations need to be limited in scale and operate with a basis of trust and consent.","organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(consensualHierarchies);

// ENVISIONING THE ECOMMONY

	let theGift = new Card("The Gift", 58, "The gift is the currency of love. It is the most ancient form of exchange and forms the glue of interdependent communities.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theGift);

	let heirloomCurrencies = new Card("Heirloom Currencies", 59, "No one currency can adequately serve the many needs we have for exchange. Encourage a multiplicity of currencies, each one intentionally designed to meet a specific need.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(heirloomCurrencies);

// TRAINGING THE SACRED WARRIOR

	let sacredActivism = new Card("Sacred Activism", "72", "We are each called to play a part in transforming our society. It's our job to figure out what is being asked of us and to develop the skills to do it well.", "warriorship", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(sacredActivism);

	let rightLivelihood = new Card("Right Livelihood", 73, "Paying the bills while maintaining your ethical integrity can sometimes seem impossible, but there are a number of strategies for finding a healthy balance between the two.", "warriorship", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(rightLivelihood);

function getRandomInt(min, max) {
  min = Math.ceil(0);
  max = Math.floor(shoeBox.length);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const cutCards = function() {

	let deck = [];

	function stackDeck() {
		if (vision.checked === true) {
			shoeBox.forEach(function(card){
				if(card.type === "vision") {
					deck.push(card);
				}
			});
		}
		if (justice.checked === true) {
			shoeBox.forEach(function(card){
				if(card.type === "justice") {
					deck.push(card);
				}
			});
		}
		if (organizations.checked === true) {
			shoeBox.forEach(function(card){
				if(card.type === "organizations") {
					deck.push(card);
				}
			});
		}
		if (economics.checked === true) {
			shoeBox.forEach(function(card){
				if(card.type === "economics") {
					deck.push(card);
				}
			});
		}
		if (warriorship.checked === true) {
			shoeBox.forEach(function(card){
				if(card.type === "warriorship") {
					deck.push(card);
				}
			});
		}
	}
	stackDeck();

	return deck;
};

const drawCard = function() {

	const deck = cutCards();

	const selection = Math.floor(Math.random() * deck.length);
	console.log(selection, deck[selection]);
}








