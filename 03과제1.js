//1
var user = {
    name: "john",
    age: 20,
}
//3
var getAged = function (user, passedTime) {
	var	user2={
            name: user.name,
            age: user.age + passedTime
        }
    return user2;
}

//2
var agedUser = getAged(user, 6);

//5
var agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (!user2) {
		    console.log("Failed! user2 doesn't exist!");
	  } else if (user1 !== user2) { 
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

//4
agedUserMustBeDifferentFromUser(user, agedUser);