// let str = 'Hacker';
// let result = str.split('');
// console.log(result);
// let arr = []
// result.forEach((element, index) => {
//     // console.log(index, element);
// 	if (index % 2 === 0) {
//         // arr.push(element)
//         let even0 = element
//         console.log(even0)
//     }
//     if (index % 2 !== 0) {
//         let odd0 = element
//         console.log(odd0)

//     }

// });

// console.log(arr)

function review(value, str0, str1) {
	value = 2;
	str0 = 'Hacker';
	str1 = 'Rank';

	let firstSplit = str0.split('');
	let secondSplit = str1.split('');
    // console.log(firstSplit);
    console.log(typeof(firstSplit))
	let arrEven0 = [];
	let arrOdd0 = [];
	let arrEven1 = [];
	let arrOdd1 = [];

	firstSplit.forEach((element, index) => {
		if (index % 2 === 0) {
			arrEven0.push(element);
			// console.log(even)
		}
	});

	firstSplit.forEach((element, index) => {
		if (index % 2 !== 0) arrOdd0.push(element);
	});
	secondSplit.forEach((element, index) => {
		if (index % 2 === 0) {
			arrEven1.push(element);
			// console.log(even)
		}
	});

	secondSplit.forEach((element, index) => {
		if (index % 2 !== 0) arrOdd1.push(element);
	});

	// console.log(arrEven0);
	// console.log(arrOdd0);
	// console.log(arrEven1);
	// console.log(arrOdd1);

	console.log(
		`${arrEven0.join('')} ${arrOdd0.join('')} 
${arrEven1.join('')} ${arrOdd1.join('')} `
	);
}

review(2, 'Hacker', 'Rank');
// var x = 'HELLO WORLD';
// var res = x.charAt(0);
// var res = x.charAt(1);
// console.log(res);







function processData(input) {
        value = 2;
        str0 = 'Hacker';
        str1 = 'Rank';

        let firstSplit = str0.split('');
        let secondSplit = str1.split('');
        // console.log(firstSplit);
        let arrEven0 = [];
        let arrOdd0 = [];
        let arrEven1 = [];
        let arrOdd1 = [];
    
        firstSplit.forEach((element, index) => {
            if (index % 2 === 0) {
                arrEven0.push(element);
                // console.log(even)
            }
        });
    
        firstSplit.forEach((element, index) => {
            if (index % 2 !== 0) arrOdd0.push(element);
        });
        secondSplit.forEach((element, index) => {
            if (index % 2 === 0) {
                arrEven1.push(element);
                // console.log(even)
            }
        });
    
        secondSplit.forEach((element, index) => {
            if (index % 2 !== 0) arrOdd1.push(element);
        });
    
    
        // console.log(arrEven0);
        // console.log(arrOdd0);
        // console.log(arrEven1);
        // console.log(arrOdd1);
        
        
        console.log(
        `${arrEven0.join('')} ${arrOdd0.join('')} 
    ${arrEven1.join('')} ${arrOdd1.join('')} `)
    } 


function processData(input) {
        value = 2;
        str0 = 'Hacker';
        str1 = 'Rank';
        
        let firstSplit = str0.split('');
        let secondSplit = str1.split('');
        // console.log(firstSplit);
        let arrEven0 = [];
        let arrOdd0 = [];
        let arrEven1 = [];
        let arrOdd1 = [];
    
        firstSplit.forEach((element, index) => {
            if (index % 2 === 0) {
                arrEven0.push(element);
                // console.log(even)
            }
        });
    
        firstSplit.forEach((element, index) => {
            if (index % 2 !== 0) arrOdd0.push(element);
        });
        secondSplit.forEach((element, index) => {
            if (index % 2 === 0) {
                arrEven1.push(element);
                // console.log(even)
            }
        });
    
        secondSplit.forEach((element, index) => {
            if (index % 2 !== 0) arrOdd1.push(element);
        });
    
    
        // console.log(arrEven0);
        // console.log(arrOdd0);
        // console.log(arrEven1);
        // console.log(arrOdd1);
        
        
        console.log(
        `${arrEven0.join('')} ${arrOdd0.join('')} 
    ${arrEven1.join('')} ${arrOdd1.join('')} `)
    } 