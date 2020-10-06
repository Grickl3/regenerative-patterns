


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

	let interdependentCommunities = new Card("Interdependent Communities", 3, "Authentic communities are ones that need each  other.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(interdependentCommunities);

	let commoning = new Card("Commoning", 4, "For centuries, large-scale forces of government  and businesses have appropriated community held land, knowledge, and relationships. Commoning is the vital process of reclaiming  these forms of wealth for our local communities.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(commoning);

	let theRightSize = new Card("The Right Size", 5, "Many of our current institutions have become too large to function in the way they were intended. Redesign systems to function at the  appropriate scale.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theRightSize);

	let relationshipZones = new Card("Relationship Zones", 6, "Our brains are structured to engage withdifferent sizes of groups in different ways. Our institutions should be aligned with these physiological thresholds.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(relationshipZones);

	let subsidiarity = new Card("Subsidiarity", 7, "The most resilient and just systems are those that are managed at the smallest practical scale.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(subsidiarity);

	let dethroningTheAntimarkets = new Card("Dethroning the Antimarkets", 8, "Free markets of local small businesses are a remarkably efficient way to distribute prosperity  throughout a community—yet our economy is dominated by an array of state-supported oligopolies that erode community wealth. The scales favoring these “antimarkets” are in need of rebalancing.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(dethroningTheAntimarkets);

	let zonesOfAutonomy = new Card("Zones of Autonomy", 9, "Before they can spread to society at large, beneficial ways of living may need to be incubated in a space that is socially, legally or geographically separate.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(zonesOfAutonomy);

	let goingHome = new Card("Going Home", 10, "Every person needs one community that they can  call home, where they feel safe, supported and  connected.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(goingHome);

	let theEdgeOfChange = new Card("The Edge of Change", 11, "The most valuable leverage points for change are usually found where our vision of the future overlaps with what’s currently considered acceptable.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theEdgeOfChange);

	let multitudesOfKnowing = new Card("Multitudes of Knowing", 12, "Scientific inquiry a powerful framework for  understanding our world. But it’s only one of  several such frameworks, all of which must be  employed and honored.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(multitudesOfKnowing);

	let fearBurnsBright = new Card("Fear Burns Bright, Hope Burns Long", 13, "Fear is a powerful catalyst to get us moving—but  hope for a better future will keep us motivated  much longer.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(fearBurnsBright);

	let theCreativeProcess = new Card("Design Tool: The Creative Process", 14, "Healing communities is a creative act, and every  creative discipline follows similar rhythms of  setting goals, observing context, developing  designs, putting designs into action, and learning  from the results.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theCreativeProcess);

	let sectorAndZone = new Card("Design Tool: Zone and Sector Analysis", 15, "Understanding concepts of scale and relative location are critical in designing successful social systems. Sector and zone analyses allow us to  easily visualize these relationships, allowing us to make better informed decisions.", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(sectorAndZone);

	let networkAnalysis = new Card("Design Tool: Network Analysis", 16, "Social permaculture is ultimately an exercise in  system design. Through network analysis, we can  map the various elements of our social systems  and how they are connected", "vision", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(networkAnalysis);

// PATTERNS OF JUSTICE AND RESISTANCE

	let decolonization = new Card("Decolonization", 17, "Our society will never heal until we identify and transform the internal, interpersonal, institutional, and ideological structures that systematically marginalize members of a culture.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(decolonization);

	let tellingTheStory = new Card("Telling the Story", 18, "Unlock the power of age old narratives to understand and share your thoughts about the world around you.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(tellingTheStory);

	let sankofa = new Card("Sankofa", 19, "In order to design a thriving future, we each must reach into the past. Take time to understand the good and not-so-good aspects of your own heritage, and commit to honoring it on your own  terms.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(sankofa);

	let ritualAndCeremony = new Card("Ritual and Ceremony", 20, "Naming an action, and repeating it on a regular basis, affords it a unique power in our consciousness. Use this power to encode healthy patterns and discourage unhealthy ones.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(ritualAndCeremony);

	let stewardship = new Card("Stewardship", 21, "Take responsibility for your own impact on the  world before assisting others.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(stewardship);

	let humanizingTheOther = new Card("Humanizing the Other", 22, "Minimize antagonistic “us-vs-them” thinking, and instead seek to identify common ground between seemingly opposed communities.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(humanizingTheOther);

	let slowCities = new Card("Slow Cities", 23, "Contemporary cities are parasitic systems, exploiting their hinterlands and driving their residents crazy. By retrofitting our urban areas into clusters of close-knit, self-determining, self sustaining villages, cities can deliver on their true potential.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(slowCities);

	let citizenGovernance = new Card("Citizen Governance", 24, "Allowing everyday citizens greater agency over  their own affairs leads to greater civic engagement and more informed decisionmaking.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(citizenGovernance);

	let infrastructureCommons = new Card("Infrastructure Commons", 25, "Take responsibility for your own impact on the  world before assisting others.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(infrastructureCommons);

	let creativeDestruction = new Card("Creative Destruction", 26, "Things fall apart. Be mindful of the inevitability  of change, and aim to ally yourself with the forces  of disturbance.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(creativeDestruction);

	let nonViolentStruggle = new Card("Non-Violent Struggle", 27, "When policy and law fail to deliver justice, the  patient, creative and dedicated efforts of nonviolent groups can bring about unprecedented transformation.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(nonViolentStruggle);

	let solidarity = new Card("Solidarity", 28, "Taking responsibility for one’s privilege means  overcoming feelings of guilt or shame, and  actively using that privilege to support the  struggles of those that don’t have the same  privilege.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(solidarity);

	let artsOfResistance = new Card("Arts of Resistance", 29, "In the face of injustice and fear, creative expression has a unique power to inspire, unite  and educate.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(artsOfResistance);

	let disrobingTheEmperor = new Card("Disrobing the Emperor", 30, "A key step of the social movement life cycle is  exposing the illegitimacy of dominant narratives. Erode the moral authority of those in charge through creative public actions.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(disrobingTheEmperor);

	let coordinatedNonCompliance = new Card("Coordinated Non-Compliance", 31, "Boycotts, strikes and sanctions may not always inflict economic pain directly. Nevertheless, they can be a successful tool for drawing attention to a cause and increasing public pressure for change. ", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(coordinatedNonCompliance);

	let truthAndReconciliation = new Card("Truth and Reconciliation", 32, "For many people, the injustices of the past remain all too real in the present. Only through a process of public reckoning can grievances be heard and a journey of healing begun.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(truthAndReconciliation);

	let breakingBread = new Card("Breaking Bread", 33, "Sharing a meal together is a sure way to build  trust.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(breakingBread);

	let lettingLoose = new Card("Letting Loose", 34, "Times of celebration are valuable in building trust and giving groups a stress-release valve.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(lettingLoose);

	let ritesOfPassage = new Card("Rites of Passage", 35, "Hold space for members of your community that are going through transformative experiences.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(ritesOfPassage);

	let gadugi = new Card("Gadugi", 36, "Communities are bound closer together by providing communal labor for one another.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(gadugi);

	let intimacyThroughAdversity = new Card("Intimacy through Adversity", 37, "Hard times bring people together. Whether it’s a  natural disaster, an interpersonal struggle, or a  stressful assignment, difficult situations can be  blessings in disguise for cementing meaningful relationships.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(intimacyThroughAdversity);

	let practicingGrief = new Card("Practicing Grief", 38, "From personal tragedies to historical injustice to climate change and ecocide, we’ve all got a lot to mourn for. Acknowledging and validating each other’s grief allows us to become more whole and work through our pain in a productive way.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(practicingGrief);

	let powerAnalysis = new Card("Design Tool: Power Analysis", 39, "Who’s on your side? Who calls the shots? What do they care about? Successful coalition-building starts with a systematic mapping of influence.", "justice", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(powerAnalysis);

// ORGANIZATIONS THAT LIVE

	let nurturedNetworks = new Card("Nurtured Networks", 40, "Horozontally structured groups can be more innovative and resilient than hierarchies — but only if they are thoughtfully designed.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(nurturedNetworks);

	let consensualHierarchies = new Card("Consensual Hierarchies", 41, "In order to stay equitable, hierarchical organizations need to be limited in scale and operate with a basis of trust and consent.","organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(consensualHierarchies);

	let humanPolycultures = new Card("Human Polycultures", 42, "Most group work happens most effectively in teams of 4–7, with a healthy balance of skills and perspectives represented among the group.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(humanPolycultures);

	let nemawashi = new Card("Nemawashi", 43, "Every group goes through a distinct process of  “forming,” “norming,” and “storming” before they  can work together cohesively. Honor this process  and allow it to take its time.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(nemawashi);

	let streamsOfEngagement = new Card("Streams of Engagement", 44, "Collaborative teams cycle through multiple modes of interaction over the course of their work. Groups that understand when and how to employ each of these modes will find themselves on sure footing.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(streamsOfEngagement);

	let theRightWayToDecide = new Card("The Right Way to Decide", 45, "Group decisions can be made via majority, plurality, consensus, or any number of other forms. Understand each of these decisionmaking processes and apply the right one in the right context.","organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theRightWayToDecide);

	let convergerAndDisperse = new Card("Converger and Disperse", 46, "In seeking a dynamic balance between collaboration and autonomy, well-functioning  groups embrace a rhythm of coming together and  breaking apart.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(convergerAndDisperse);

	let leadershipFromWithin = new Card("Leadership from Within", 47, "Although outsiders can play key roles of support and influence, authentic change must come from within the ranks of the affected community.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(leadershipFromWithin);

	let regenerativeManagement = new Card("Regenerative Management", 48, "Successful leaders are always seeking opportunities to cultivate leadership within  others.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(regenerativeManagement);

	let namingNorms = new Card("Naming Norms", 49, "Every group has its own rules about what kinds of behavior are encouraged or discouraged. Effective groups make those rules transparent, name them early in the nemawashi process, and continue to revise them as the group evolves.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(namingNorms);

	let skilledFacilitation = new Card("Skilled Facilitation", 50, "Even the most experienced groups of people benefit from having someone to keep discussions effective and on-track.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(skilledFacilitation);

	let circleDialog = new Card("Circle Dialog", 51, "Groups of people discussing and deliberating in a circle is the oldest, most democratic, and most elemental form of decisionmaking.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(circleDialog);

	let theCaucus = new Card("The Caucus", 52, "Members of a group that share a common  interest need the space to develop their own  subgroups—especially if they come from marginalized backgrounds.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theCaucus);

	let callingOut = new Card("Calling Out, Calling In", 53, "An important part of acknowledging privilege is pointing out instances when our peers abuse it, while doing so in a compassionate and respectful way", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(callingOut);

	let restorativeJustice = new Card("Restorative Justice", 54, "A justice system rooted in revenge and retribution will only perpetuate more of the same. But bringing victim and perpetrator together in a process of Conflict Transformation can propel both parties to grow and heal.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(restorativeJustice);

	let documentTheProcess = new Card("Document the Process", 55, "Learning organizations” adapt and grow by constantly trying out new ideas and institutionalizing the ones that work", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(documentTheProcess);

	let measuringSuccess = new Card("Measuring Success", 56, "Lasting impact cannot be gauged solely on the basis of inspiring anecdotes or external attention. Instead, design systems to accurately quantify your influence, and use them to inform your decisions.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(measuringSuccess);

	let teamAnalysis = new Card("Design Tool: Team Analysis", 57, "Successful people polycultures require a balanced team of members that trust one another. Using team analysis, we can investigate the strengths and challenges of our collaborative groups.", "organizations", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(teamAnalysis);

// ENVISIONING THE ECOMMONY

	let theGift = new Card("The Gift", 58, "The gift is the currency of love. It is the most ancient form of exchange and forms the glue of interdependent communities.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theGift);

	let heirloomCurrencies = new Card("Heirloom Currencies", 59, "No one currency can adequately serve the many needs we have for exchange. Encourage a multiplicity of currencies, each one intentionally designed to meet a specific need.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(heirloomCurrencies);

	let financialRamPumps = new Card("Financial Ram Pumps", 60, "Central currencies like the dollar are designed to flow toward inequality, but skillful interventions can sometimes reverse part of that flow to achieve more beneficial aims.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(financialRamPumps);

	let debtForgiveness = new Card("Debt Forgiveness", 61, "Interest-bearing loans are a powerful economic catalyst— and, nearly as frequently, a brutal tool of oppression. A periodic clearing of the accounts keep debt’s darker sides in check.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(debtForgiveness);

	let householdEconomies = new Card("Household Economies", 62, "In most ecologically-literate societies, many of the  community’s essential needs are met at the family scale, within the home. These household services should be respected and encouraged.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(householdEconomies);

	let smallBusiness = new Card("Small Business", 63, "Entrepreneurship is a primary indicator of a thriving local economy. Small businesses are more flexible and adaptive to change than large ones, and are more accountable to the communities of which they are a part.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(smallBusiness);

	let importSubstitution = new Card("Import Substitution", 64, "As local networks of cottage industry and small business reach a critical mass, they can lead communities to greater and greater levels of economic self-sufficiency", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(importSubstitution);

	let regenerativeEnterprise = new Card("Regenerative Enterprise", 65, "Generating income and making a positive social  impact need not be mutually exclusive. Many of the most robust and resilient organizations are ones that manage to do both.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(regenerativeEnterprise);

	let xericEnterprise = new Card("xericEnterprise", 66, "Keeping overhead costs low reduces a business’ exposure to changing market forces, allowing it to survive the lean times while thriving during good ones.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(xericEnterprise);

	let communitySupportedEnterprise = new Card("Community Supported Enterprise", 67, "The best way to ensure that a business is meeting a real need, and keeping itself accountable to its community, is to have the customers become the investors.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(communitySupportedEnterprise);

	let theGift = new Card("The Gift", 68, "The gift is the currency of love. It is the most ancient form of exchange and forms the glue of interdependent communities.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theGift);

	let theGift = new Card("The Gift", 69, "The gift is the currency of love. It is the most ancient form of exchange and forms the glue of interdependent communities.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theGift);

	let theGift = new Card("The Gift", 70, "The gift is the currency of love. It is the most ancient form of exchange and forms the glue of interdependent communities.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theGift);

	let theGift = new Card("The Gift", 71, "The gift is the currency of love. It is the most ancient form of exchange and forms the glue of interdependent communities.", "economics", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(theGift);

// TRAINGING THE SACRED WARRIOR

	let sacredActivism = new Card("Sacred Activism", "72", "We are each called to play a part in transforming our society. It's our job to figure out what is being asked of us and to develop the skills to do it well.", "warriorship", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(sacredActivism);

	let rightLivelihood = new Card("Right Livelihood", 73, "Paying the bills while maintaining your ethical integrity can sometimes seem impossible, but there are a number of strategies for finding a healthy balance between the two.", "warriorship", "Adam Brock", ["question 1", "question 2", "question 3"]);
	shoeBox.push(rightLivelihood);


// DRAWING A CARD

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
		// console.log(selection, deck[selection]);

		return deck[selection];
	}








