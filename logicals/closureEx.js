// setTimeout and Closure function interview related things

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
