    // Testing JS array methods

    // Data set 1 to work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
  
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blake, William'];

     // Data set 2 to work with
     
    const companies= [
		{name: "Company One", category: "Finance", start: 1981, end: 2004},
		{name: "Company Two", category: "Retail", start: 1992, end: 2008},
		{name: "Company Three", category: "Auto", start: 1999, end: 2007},
		{name: "Company Four", category: "Retail", start: 1989, end: 2010},
		{name: "Company Five", category: "Technology", start: 2009, end: 2014},
		{name: "Company Six", category: "Finance", start: 1987, end: 2010},
		{name: "Company Seven", category: "Auto", start: 1986, end: 1996},
		{name: "Company Eight", category: "Technology", start: 2011, end: 2016},
		{name: "Company Nine", category: "Retail", start: 1981, end: 1989}
		];

	const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

	    // Array.prototype.filter() 
	    // Data set 1
	    // 1. Filter the list of inventors for those who were born in the 1500's
 		console.log("Ex.1");

     const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    
     console.table(fifteen);
	// // The above was refactored from the following code:
	// // 
 //    // const fifteen = inventors.filter(function(inventor){
 //    // 	if(inventor.year >= 1500 && inventor.year < 1600){
 //    // 		return true;
 //    // 	}
 //    // });

 //    // console.table(fifteen);  

	//     // Array.prototype.map()
	//     // Data set 1
	//     // 2. Give us an array of the inventors' first and last names
    console.log("Ex.2");


	const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
	console.log(fullNames);

	// The above was modifed from the following code:
	// const fullNames = inventors.map(inventor => inventor.first + inventor.last);
	// console.log(fullNames);

	//     // Array.prototype.sort()
	//     // Data set 1
	//     // 3. Sort the inventors by birthdate, oldest to youngest
	console.log("Ex.3");

	const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

	console.table(ordered);

	// // The above was refactored from the following code:
	// // 
	// // const ordered = inventors.sort(function(a,b){
	// // 	if(a.year > b.year){
	// // 		return 1;
	// // 	}else{
	// // 		return -1;
	// // 	}
	// // });

	// // console.table(ordered);
	
	
 //    // Array.prototype.reduce()
 //    // Data set 1
 //    // 4. How many years did all the inventors live?
    console.log("Ex.4");

    const totalYears = inventors.reduce((total, inventor) => {
    	return total + (inventor.passed - inventor.year);
    },0);

    console.log(totalYears);

 //    // 5. Sort the inventors by years lived
 //    // Data set 1
    console.log("Ex.5");
    
    const oldest = inventors.sort(function(a,b){
    	const lastGuy = a.passed - a.year;
    	const nextGuy = b.passed - b.year;
    	// if(lastGuy > nextGuy){
    	// 	return -1;
    	// }else{
    	// 	return 1;
    	// }  ||..
    	return lastGuy > nextGuy ? -1 : 1;
    });

    console.table(oldest);



 //    // 6. sort Exercise
 //    // Data set 1
 //    // Sort the people alphabetically by last name
    console.log("Ex.6");

    const alpha = people.sort((lastOne, nextOne) => {
    	const [aLast,aFirst] = lastOne.split(', ');
		const [bLast,bFirst] = lastOne.split(', ');
    	return aLast > bLast ? 1 : -1;
    });

    console.log(alpha);


 //    // 7. Reduce Exercise
 //    // Data set 1
    console.log("Ex.7");

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce(function(obj, item){
    	if (!obj[item]) {
    		obj[item] = 0;
    	}
    	obj[item]++;
    	return obj;
    }, {});
	console.log(transportation);

	

// Data set 2 - array methods
	
	// 8. forEach
	console.log(`- - Data set 2
	Ex.8`);
	
	companies.forEach(function(company){
		console.log(company);
	});

	//FILTER ARRAY - ages of 21 and older
	
	// let canDrink = [];
	// for(let i = 0; i < ages.length; i++) {
	// 	if(ages[i] >= 21){
	// 		canDrink.push(ages[i]);
	// 	}
	// }
	// 
	// --The above was refactored to the following code:
	// 
	// const canDrink = ages.filter(function(age){
	// 	if(age >= 21){
	// 		return true;
	// 	}
	// });

	// --The above was refactored further to the following code:
	// 
	
	const canDrink = ages.filter(age => age >= 21);

	console.log(canDrink);

	// 9. filter companies array for category of retail  
	console.log("Ex.9");

	// const retailCompanies = companies.filter(function(company){
	// 	if (company.category === 'Retail') {
	// 		return true;
	// 	}
	// });
	// 
	// --The above was refactored to the following code:
	// 
	
	const retailCompanies = companies.filter(company => company.category === 'Retail');

	console.log(retailCompanies);

	// 10. filter all companies created in the 80z 
	console.log("Ex.10");

	const eightiesCompanies = companies.filter(eighties => (eighties.start >= 1980 && eighties.start < 1990));
	console.log(eightiesCompanies);

	// 11. filter companies that lasted 10 yearz or more
	console.log("Ex.11");

	const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
	console.log(lastedTenYears);

		// MAP ARRAY FUNCTION
	console.log("Ex.12");
	//Ex 12.
	// create array of company namez
	
	const companyNames = companies.map(function(company){
		return company.name;
	});
	
	console.log(companyNames);

	//Ex 13.
	// create array of company years - start to end
	console.log("Ex.13");
	
	// const companyYears = companies.map(function(company){
	// 	return `${company.name} [${company.start} - ${company.end}]`;
	// });
	
	// console.log(companyYears);
	// --The above was refactored to the following code:
	// 
	const companyYears = companies.map(company => `${company.name} [${company.start} - ${company.end}]`
	);
	console.log(companyYears);

		//SORT array
	//Ex 13.
	// create array of companies sorted by start date
	console.log("Ex.13");

	const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1: -1));
	console.log(sortedCompanies);

		//REDUCE array
	//Ex 14.
	// create array of total company years 
	console.log("Ex.14");

	// const ageSum = ages.reduce(function(total, age){
	// 	return total + age;
	// },0);
	// the above code refactored to the following:

	const ageSum = ages.reduce((total, age) => total + age,0);

	console.log(ageSum);