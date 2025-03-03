let fName = ['Roster', 'Queen', 'Nevada', 'Anton', 'Steve', 'Alex', 'Jonathan', 'Lucy', 'School', 'School-Bus', 'Pants', 'Constintine', 'Bartholowmew', 'Chair', 'Sierra','Clock', 'Rita', 'Toji', 'Dog', 'Eep']; // First Name Random Pool

let mName = ['Bagel', 'King', 'Alexander', 'Van', 'Ruby', 'Harocisneros', 'Brian', 'Globe', 'University', 'Logan', 'Constitution', 'Kardi', 'Junior', 'Computer', 'Gabriel', 'Button', 'Bronya', 'Redhead', 'Louis-Augisine']; // Middle Name Random Pool

let lName = ['John', 'Pawn', 'Tusk', 'Lewonhook', 'Nora', 'Rodriguez', 'Hamilton', 'Phoenix', 'Lebron-James', 'Charger', 'Pencil-Sharpener XVIII', 'Omar', 'Malcom III', 'Glasses X', 'Lacroix', 'Waldo VIII', 'Bleach XX', 'Batman', 'Jaquavious']; // Last Name Random Pool

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