
        /*  
        Functions
        1. Create the funstions
        2. Call the functions
        */

        // create

         function fun() {
            console.log ('This is a funtions');
        }

        // call

        //fun();

        function greeting(yourName) {
            
            var result = 'Hello'+ ' ' + yourName;// string concatenation
            console.log(result);
            
        }

     //   var name = prompt ('what is your name?');
     //   greeting(name);



    //sumation funtion

        function sumNumbers( num1, num2) {
            var result = num1 + num2;
            console.log(result);
        }

        sumNumbers(10, 30);


    //while loop

  /*  var num = 0;

    while (num < 100) {
        num+= 1;
        console.log(num);
        
    }

    */

    //for loop


    //Data type

    let yourAge = 18; // number

    let yourName = "Sourav"; // String

    let name = { first: 'Md', last: 'Sourav'}; // Object
    
    let truth = false ; // boolean

    let groceries = [ 'apple', 'banana', 'orange'];

    let random; // undefined

    let nothing = null; // value null

    // string in javascript (common method)

    let fruit = 'banana, apple, orange, pineapples';
    let moreFruits = 'banana\nappple';

    console.log(moreFruits .length);
    console.log(fruit.indexOf('an'));
    console.log( fruit.slice(2 , 4));
    console.log(fruit.replace( 'ban', '123'));
    console.log( fruit.toUpperCase( fruit));
    console.log(fruit.toLowerCase(fruit));
    console.log(fruit.charAt(2));
    console.log(fruit.split(','));
    console.log(fruit.split(''));

    //Array
   let fruits = ['apple', 'orange', 'banana', 'pinapples'];

   console.log (fruits[0]);// access value at index 0nd

   fruits[0] = 'pear';
   console.log(fruits);

   for ( let i=0; i< fruits.length; i++ ){
       console.log(fruits[i]);
   }

   // array common methods
   console.log( 'to string', fruits.toString());
   console.log (fruits.join(' - '));
   console.log( fruits.pop(), fruits); // remove last item
   console.log( fruits.push('blackbarries'), fruits);
   console.log(fruits[3]); 
   fruits[fruits.length]= 'new fruits';
   fruits[fruits.length]=  'another new fruits';
   console.log(fruits);
   fruits.shift();// remove first element from the list
   console.log(fruits);
   fruits.unshift('kiwi');// add a new element in the array 
   console.log(fruits);

   let vegetables= ['asparagus', 'tomato', 'broccoli']; //array

   let allGroceries = fruits.concat(vegetables);// concate arrays
   console.log(allGroceries);
   console.log(allGroceries.slice(1, 4));// slice items from 2 to 4
   console.log(allGroceries.reverse()); // reverse all the items
   console.log(allGroceries.sort()); // alphabetically sorted

   let someNumners = [1, 22, 33, 25, 122, 322, 422, 3, 4, 6];
   console.log(someNumners.sort()); // number sorted 

   console.log(someNumners.sort( function(a, b) {return a-b})); // accending order
   console.log(someNumners.sort( function(a, b) {return b-a})); // decending order

/*let emptyArray = new Array();
   for ( let num = 0; num=10 ; num++)  {
       emptyArray.push(num);
   }
    console.log(emptyArray);
    */


    //objcts in Javascript
    // dictionaries in Python

    let student= { first: 'Md', 
    last: 'Sourav', 
    age: 25, 
    height: 150,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
     }
  };

  //  console.log(student.first);
  //  console.log(student.last);
  //  student.first = 'notMd'; // change value
  //  console.log(student.first);
  //  student.age++;
  //  console.log(student.age);

    console.log (student.studentInfo());