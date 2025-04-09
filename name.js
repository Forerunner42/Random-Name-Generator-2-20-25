let fName = ['Roster', 'Queen', 'Nevada', 'Anton', 'Steve', 'Alex', 'Jonathan', 'Lucy', 'School', 'School-Bus', 'Pants', 'Constintine', 'Bartholowmew', 'Chair', 'Sierra','Clock', 'Rita', 'Toji', 'Dog', 'Eep',  "Olivia", "Emma", "Ava", "Sophia", "Isabella", "Mia", "Charlotte", "Amelia",
  "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Scarlett", "Grace", "Chloe",
  "Victoria", "Riley", "Lily", "Aurora", "Hannah", "Ellie", "Leah", "Mila",
  "Zoe", "Addison", "Layla", "Madison", "Nora", "Natalie", "Luna", "Penelope",
  "Savannah", "Aria", "Stella", "Sofia", "Zippie", "Violet", "Audrey", "Lucy",
  "Bella", "Ariana", "Cora", "Camila", "Alice", "Hailey", "Lillian", "Skylar",
  "Genesis", "Kennedy"]; // First Name Random Pool

let mName = ['Bagel', 'King', 'Alexander', 'Van', 'Ruby', 'Harocisneros', 'Brian', 'Globe', 'University', 'Logan', 'Constitution', 'Kardi', 'Junior', 'Computer', 'Gabriel', 'Button', 'Bronya', 'Redhead', 'Louis-Augisine',  "Blueberry", "Quantum", "Nebula", "Hickory", "Pixie", "Blaze", "Rocket",
  "Squidward", "Moose", "Zipper", "Tango", "Whisker", "Mango", "Jubilee",
  "Pancake", "Cricket", "Nimbus", "Tofu", "Falafel", "Jellybean", "Snickers",
  "Sock", "Velvet", "Bonsai", "Widget", "Torpedo", "Marzipan", "Banana",
  "Jigsaw", "Tiramisu", "Whistle", "Doodle", "Cucumber", "Spaghetti",
  "Wombat", "Tumbleweed", "Skylark", "Parsnip", "Cheddar", "Goblin", "Lollipop",
  "Truffle", "Rutabaga", "Scuba", "Tinsel", "Pumpkin", "Walrus", "Platypus",
  "Cookie", "Cactus"]; // Middle Name Random Pool

let lName = ['John', 'Pawn', 'Tusk', 'Lewonhook', 'Nora', 'Rodriguez', 'Hamilton', 'Phoenix', 'Lebron-James', 'Charger', 'Pencil-Sharpener XVIII', 'Omar', 'Malcom III', 'Glasses X', 'Lacroix', 'Waldo VIII', 'Bleach XX', 'Batman', 'Jaquavious',  "Fizzbottom I", "Snarfington II", "Whiskerpants III", "Blubber IV",
  "Wobbleworth V", "Slimesicle VI", "Puddingbottom VII", "Jigglybeans VIII",
  "Taterfluff IX", "Frogtree X", "Chortleflap XI", "Picklesnarf XII",
  "Gigglesworth XIII", "Guffawkins XIV", "Hiccupbottom XV", "Doodlescoop XVI",
  "Wigglesnoot XVII", "Squidpickle XVIII", "Pumpernickel XIX", "Flapjack XX",
  "Butterbean XXI", "Snuggletooth XXII", "Bagelwitz XXIII", "Porkchop XXIV",
  "Crankshaft XXV", "Wobbleplume XXVI", "Bumblebean XXVII", "Twiddlepop XXVIII",
  "Shenanigan XXIX", "Gigglequack XXX", "Chucklefizz XXXI", "Blunderfoot XXXII",
  "Clumsicle XXXIII", "Noodlewhip XXXIV", "Snickerdoodle XXXV", "Kazooplume XXXVI",
  "Jellywig XXXVII", "Fluffington XXXVIII", "Mufflebop XXXIX", "Quizzlesnap XL",
  "Gobblepants XLI", "Smogglehorn XLII", "Bumblesnort XLIII", "Sploosher XLIV",
  "Wiggly XLV", "Snorkle XLVI", "Dinglehopper XLVII", "Jibberflap XLVIII",
  "Shuffletoes XLIX", "Whifflebottom L"]; // Last Name Random Pool

let mid = true; // Middle Name toggle variable



function rollAll() // Reroll All Names
{
    let A = rollA();
    let B = rollB();
    let C = rollC();
    console.log(A, B, C); // Display Results
}

function toggleMid() // Toggle Middle Name
{
    if(mid === true)
    {
        mid = false;
        document.getElementById('middleName').style.display = 'none';
        document.getElementById('toggle').style.backgroundColor = 'red';
        document.getElementById('middle').style.backgroundColor = 'red';
        console.log("Middle Name : OFF"); // Display Change
    }
    else
    {
        mid = true;
        document.getElementById('middleName').style.display = 'block';
        document.getElementById('toggle').style.backgroundColor = 'green';
        document.getElementById('middle').style.backgroundColor = 'green';
        console.log("Middle Name : ON"); // Display Change
    }
}

function rollA() // Roll First Name
{
    let X = fName[Math.floor(Math.random() * fName.length)];

    document.getElementById('firstName').innerHTML = X;
    console.log("Your First Name is: " + X); // Display First Name
    return X;
}

function rollB() // Roll Middle Name
{
    let X = mName[Math.floor(Math.random() * mName.length)];

    document.getElementById('middleName').innerHTML = X;
    console.log("Your Middle Name is: " + X); // Display Middle Name
    return X;
}

function rollC() // Roll Last Name 
{
    let X = lName[Math.floor(Math.random() * lName.length)];

    document.getElementById('lastName').innerHTML = X;
    console.log("Your Last Name is: " + X); // Display Last Name
    return X;
}
