let computerWords = [
  "Abuse",
  "Adult",
  "Agent",
  "Anger",
  "Apple",
  "Award",
  "Basis",
  "Beach",
  "Birth",
  "Block",
  "Blood",
  "Board",
  "Brain",
  "Bread",
  "Break",
  "Brown",
  "Buyer",
  "Cause",
  "Chain",
  "Chair",
  "Chest",
  "Chief",
  "Child",
  "China",
  "Claim",
  "Class",
  "Clock",
  "Coach",
  "Coast",
  "Court",
  "Cover",
  "Cream",
  "Crime",
  "Cross",
  "Crowd",
  "Crown",
  "Cycle",
  "Dance",
  "Death",
  "Depth",
  "Doubt",
  "Draft",
  "Drama",
  "Dream",
  "Dress",
  "Drink",
  "Drive",
  "Earth",
  "Enemy",
  "Entry",
  "Error",
  "Event",
  "Faith",
  "Fault",
  "Field",
  "Fight",
  "Final",
  "Floor",
  "Focus",
  "Force",
  "Frame",
  "Frank",
  "Front",
  "Fruit",
  "Glass",
  "Grant",
  "Grass",
  "Green",
  "Group",
  "Guide",
  "Heart",
  "Henry",
  "Horse",
  "Hotel",
  "House",
  "Image",
  "Index",
  "Input",
  "Issue",
  "Japan",
  "Jones",
  "Judge",
  "Knife",
  "Laura",
  "Layer",
  "Level",
  "Lewis",
  "Light",
  "Limit",
  "Lunch",
  "Major",
  "March",
  "Match",
  "Metal",
  "Model",
  "Money",
  "Month",
  "Motor",
  "Mouth",
  "Music",
  "Night",
  "Noise",
  "North",
  "Novel",
  "Nurse",
  "Offer",
  "Order",
  "Other",
  "Owner",
  "Panel",
  "Paper",
  "Party",
  "Peace",
  "Peter",
  "Phase",
  "Phone",
  "Piece",
  "Pilot",
  "Pitch",
  "Place",
  "Plane",
  "Plant",
  "Plate",
  "Point",
  "Pound",
  "Power",
  "Press",
  "Price",
  "Pride",
  "Prize",
  "Proof",
  "Queen",
  "Radio",
  "Range",
  "Ratio",
  "Reply",
  "Right",
  "River",
  "Round",
  "Route",
  "Rugby",
  "Scale",
  "Scene",
  "Scope",
  "Score",
  "Sense",
  "Shape",
  "Share",
  "Sheep",
  "Sheet",
  "Shift",
  "Shirt",
  "Shock",
  "Sight",
  "Simon",
  "Skill",
  "Sleep",
  "Smile",
  "Smith",
  "Smoke",
  "Sound",
  "South",
  "Space",
  "Speed",
  "Spite",
  "Sport",
  "Squad",
  "Staff",
  "Stage",
  "Start",
  "State",
  "Steam",
  "Steel",
  "Stock",
  "Stone",
  "Store",
  "Study",
  "Stuff",
  "Style",
  "Sugar",
  "Table",
  "Taste",
  "Terry",
  "Theme",
  "Thing",
  "Title",
  "Total",
  "Touch",
  "Tower",
  "Track",
  "Trade",
  "Train",
  "Trend",
  "Trial",
  "Trust",
  "Truth",
  "Uncle",
  "Union",
  "Unity",
  "Value",
  "Video",
  "Visit",
  "Voice",
  "Waste",
  "Watch",
  "Water",
  "While",
  "White",
  "Whole",
  "Woman",
  "World",
  "Youth",
  "Admit",
  "Adopt",
  "Agree",
  "Allow",
  "Alter",
  "Apply",
  "Argue",
  "Arise",
  "Avoid",
  "Begin",
  "Blame",
  "Break",
  "Bring",
  "Build",
  "Burst",
  "Carry",
  "Catch",
  "Cause",
  "Check",
  "Claim",
  "Clean",
  "Clear",
  "Climb",
  "Close",
  "Count",
  "Cover",
  "Cross",
  "Dance",
  "Doubt",
  "Drink",
  "Drive",
  "Enjoy",
  "Enter",
  "Exist",
  "Fight",
  "Focus",
  "Force",
  "Guess",
  "Imply",
  "Issue",
  "Judge",
  "Laugh",
  "Learn",
  "Leave",
  "Limit",
  "Marry",
  "Match",
  "Occur",
  "Offer",
  "Order",
  "Phone",
  "Place",
  "Point",
  "Press",
  "Prove",
  "Raise",
  "Reach",
  "Refer",
  "Relax",
  "Serve",
  "Shall",
  "Share",
  "Shift",
  "Shoot",
  "Sleep",
  "Solve",
  "Sound",
  "Speak",
  "Spend",
  "Split",
  "Stand",
  "Start",
  "State",
  "Stick",
  "Study",
  "Teach",
  "Thank",
  "Think",
  "Throw",
  "Touch",
  "Train",
  "Treat",
  "Trust",
  "Visit",
  "Voice",
  "Waste",
  "Watch",
  "Worry",
  "Would",
  "Write",
  "Above",
  "Acute",
  "Alive",
  "Alone",
  "Angry",
  "Aware",
  "Awful",
  "Basic",
  "Black",
  "Blind",
  "Brave",
  "Brief",
  "Broad",
  "Brown",
  "Cheap",
  "Chief",
  "Civil",
  "Clean",
  "Clear",
  "Close",
  "Crazy",
  "Daily",
  "Dirty",
  "Early",
  "Empty",
  "Equal",
  "Exact",
  "Extra",
  "Faint",
  "False",
  "Fifth",
  "Final",
  "First",
  "Fresh",
  "Front",
  "Funny",
  "Giant",
  "Grand",
  "Great",
  "Green",
  "Gross",
  "Happy",
  "Harsh",
  "Heavy",
  "Human",
  "Ideal",
  "Inner",
  "Joint",
  "Large",
  "Legal",
  "Level",
  "Light",
  "Local",
  "Loose",
  "Lucky",
  "Magic",
  "Major",
  "Minor",
  "Moral",
  "Naked",
  "Nasty",
  "Naval",
  "Other",
  "Outer",
  "Plain",
  "Prime",
  "Prior",
  "Proud",
  "Quick",
  "Quiet",
  "Rapid",
  "Ready",
  "Right",
  "Roman",
  "Rough",
  "Round",
  "Royal",
  "Rural",
  "Sharp",
  "Sheer",
  "Short",
  "Silly",
  "Sixth",
  "Small",
  "Smart",
  "Solid",
  "Sorry",
  "Spare",
  "Steep",
  "Still",
  "Super",
  "Sweet",
  "Thick",
  "Third",
  "Tight",
  "Total",
  "Tough",
  "Upper",
  "Upset",
  "Urban",
  "Usual",
  "Vague",
  "Valid",
  "Vital",
  "White",
  "Whole",
  "Wrong",
  "Young",
  "After",
  "Bothe",
  "Other",
  "Since",
  "Slash",
  "Until",
  "Where",
  "While",
  "Aback",
  "Abaft",
  "Aboon",
  "About",
  "Above",
  "Accel",
  "Adown",
  "Afoot",
  "Afore",
  "Afoul",
  "After",
  "Again",
  "Agape",
  "Agogo",
  "Agone",
  "Ahead",
  "Ahull",
  "Alife",
  "Alike",
  "Aline",
  "Aloft",
  "Alone",
  "Along",
  "Aloof",
  "Aloud",
  "Amiss",
  "Amply",
  "Amuck",
  "Apace",
  "Apart",
  "Aptly",
  "Arear",
  "Aside",
  "Askew",
  "Awful",
  "Badly",
  "Bally",
  "Below",
  "Canny",
  "Cheap",
  "Clean",
  "Clear",
  "Coyly",
  "Daily",
  "Dimly",
  "Dirty",
  "Ditto",
  "Drily",
  "Dryly",
  "Dully",
  "Early",
  "Extra",
  "False",
  "Fatly",
  "Feyly",
  "First",
  "Fitly",
  "Forte",
  "Forth",
  "Fresh",
  "Fully",
  "Funny",
  "Gaily",
  "Gayly",
  "Godly",
  "Great",
  "Haply",
  "Heavy",
  "Hella",
  "Hence",
  "Hotly",
  "Icily",
  "Infra",
  "Jildi",
  "Jolly",
  "Laxly",
  "Lento",
  "Light",
  "Lowly",
  "Madly",
  "Maybe",
  "Never",
  "Newly",
  "Nobly",
  "Oddly",
  "Often",
  "Other",
  "Ought",
  "Party",
  "Piano",
  "Plain",
  "Plonk",
  "Plumb",
  "Prior",
  "Queer",
  "Quick",
  "Quite",
  "Ramen",
  "Rapid",
  "Redly",
  "Right",
  "Rough",
  "Round",
  "Sadly",
  "Secus",
  "Selly",
  "Sharp",
  "Sheer",
  "Shily",
  "Short",
  "Shyly",
  "Silly",
  "Since",
  "Sleek",
  "Slyly",
  "Small",
  "Sound",
  "Spang",
  "Srsly",
  "Stark",
  "Still",
  "Stone",
  "Stour",
  "Super",
  "Tally",
  "Tanto",
  "There",
  "Thick",
  "Tight",
  "Today",
  "Tomoz",
  "Truly",
  "Twice",
  "Under",
  "Utter",
  "Verry",
  "Wanly",
  "Wetly",
  "Where",
  "Wrong",
  "Wryly",
  "Hello",
  "Crane"
];
let computerWordUpper = computerWords[Math.floor(Math.random() * 563) + 1];
let computerWord = computerWordUpper.toLowerCase();
let guessCount = -1;
var userWords = [];
function enter() {
  var getUserWord = document.getElementById("input").value;
  var getUserWordLower = getUserWord.toLowerCase();
  var userWord = getUserWordLower.toString();

  if (userWord.length == 5) {
    guessCount = guessCount + 1;
    if (guessCount < 6) {
      userWords.push({ userWord });

      let computerWordLetters = [];
      for (let i = 0; i < 5; i++) {
        computerWordLetters.push(computerWord[i]);
      }

      for (let i = 0; i < 5; i++) {
        if (userWords[guessCount].userWord[i] == computerWord[i]) {
          document.getElementById(
            "Word" + guessCount + "Letter" + i
          ).innerHTML = userWords[guessCount].userWord[i];
          document.getElementById(
            "Word" + guessCount + "Letter" + i
          ).style.color = "green";
          computerWordLetters = computerWordLetters.filter(
            (e) => e !== userWords[guessCount].userWord[i]
          );
        }
      }
      for (let i = 0; i < 5; i++) {
        if (
          computerWord.includes(userWords[guessCount].userWord[i]) &&
          computerWordLetters.includes(userWords[guessCount].userWord[i])
        ) {
          document.getElementById(
            "Word" + guessCount + "Letter" + i
          ).innerHTML = userWords[guessCount].userWord[i];
          document.getElementById(
            "Word" + guessCount + "Letter" + i
          ).style.color = "yellow";
        } else if (
          document.getElementById("Word" + guessCount + "Letter" + i).style
            .color !== "green"
        ) {
          document.getElementById(
            "Word" + guessCount + "Letter" + i
          ).innerHTML = userWords[guessCount].userWord[i];
          document.getElementById(
            "Word" + guessCount + "Letter" + i
          ).style.color = "grey";
        }
      }

      if (userWords[guessCount].userWord == computerWord) {
        document.getElementById("results").innerHTML = "You Win!";
        document.getElementById("guessCount").innerHTML =
          "You did it in " + (guessCount + 1) + " guesses";
      } else if (guessCount == 5) {
        document.getElementById("results").innerHTML = "You lose!";
        document.getElementById("theWordWas").innerHTML =
          "The word was: " + computerWordUpper;
      }
    }
  }
}
