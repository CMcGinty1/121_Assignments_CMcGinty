const avengers = [
    {
     "name": "Iron Man",
     "realName": "Tony Stark",
     "age": 48,
     "primaryPower": "Genius-level intellect" 
    }, 
    { 
      "name": "Captain America",
      "realName": "Steve Rogers", 
      "age": 100, 
      "primaryPower": "Super Strength" 
    }, 
    { 
      "name": "Thor Odinson", 
      "age": 1500, 
      "primaryPower": "Lightning" 
    }, 
    { 
      "name": "Hulk",
      "realName": "Bruce Banner",
      "age": 49, 
      "primaryPower": "Super Strength" 
    }, 
    { 
      "name": "Black Widow",
      "realName": "Natasha Romanoff",
      "age": 34, 
      "primaryPower": "Expert spy" 
    }, 
    { 
      "name": "Hawkeye",
      "realName": "Clint Barton", 
      "age": 35, 
      "primaryPower": "Master archer"
    }
  ];
  //use the fore loop to iterate through the array and log the name of the hero
  for (i in avengers) {
    console.log(avengers[i].name)
  }
  //use the for loop to iterate through the array and check the primary power with an if == statement, if true, log the name of the hero
  for (i in avengers) {
    if (avengers[i].primaryPower == "Super Strength") {
      console.log(avengers[i].name)
    }
  }
  //use the for loop to iterate through the array and check the age with an if >= statement, if true, log the name of the hero
  for (i in avengers) {
    if (avengers[i].age >= 50) {
      console.log(avengers[i].name)
    }
  }