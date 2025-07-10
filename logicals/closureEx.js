// setTimeout and Closure function interview related things

/**
 * closuer definations--
 * A closure is a function that remembers and has access to its outer (lexical) environment, even after the outer function has finished executing.
 * A closure is a combination of a function and its lexical scope bundled together.
 * A closure is a function that carries with it a reference to its outer (enclosing) environment.
 * 
 * | Concept      | What it Means                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Closure**  | A function that **remembers** the variables from its **outer (lexical) scope**, even after the outer function has returned.           |
| **Callback** | A function that is **passed as an argument** to another function and **invoked later**, often in response to some event or condition. |

 */
//// approach 01
// function x(){
//     var i =1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
//     console.log('ravi ranjan')
// }
// x();

//// using setTimeout print 1 to 5.
// function sx() {
//     // using for loop...
//     for(var i =1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000)
//     }
//     console.log('ravi ranjan');
// }
////calling function
// sx();

// // As you see above it printing only 6 mutiple time
// // So even we can fix this by using block level scope which will be a 'let' key.
// function sx() {
//     // using for loop...
//     for(let i =1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000)
//     }
//     console.log('ravi ranjan');
// }
// //calling function
// sx();
// So if you want to print in proper sequence while using 'var' than we need to wrap inside closure.

function sx() {
  for (let i = 1; i <= 5; i++) {
    // now i need wrap in one more funtion.
    function close(x) {
      // using for loop..
      setTimeout(function () {
        console.log(x);
      }, 2000);
    }
    close(i);
  }
  console.log("ravi ranjan");
}
//calling function
sx();
