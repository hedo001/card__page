// Task - 1

// function checkNumberLarger(num) {
//   if ((num + "").length == 2) {
//     num += "";
//     let num2 = "";
//     for (let i = num.length - 1; i >= 0; i--) {
//       num2 += num[i];
//     }

//     return Number(num) > Number(num2);
//   } else {
//     return "The number should consist of 2 digits only";
//   }
// }
// console.log(checkNumberLarger(131));

// Task - 2

// function findAbiggerSize(a, b) {
//   let size1 = 0;
//   let size2 = 0;
//   let sizes = {
//     S: 5,
//     M: 100,
//     L: 1000,
//     X: 1,
//   };
  
//   if (  a[a.length-1] != 'X' && b[b.length-1] != 'X' )  {
    
//     for (const key of a) {
//       if (key in sizes) {

//         size1 += sizes[key];
      
//       }
//     }
//     for (const key2 of b) {
//       if (key2 in sizes) {
//         size2 += sizes[key2];
       
//       }
//     }
//     if (size1 > size2) {
//       return ">";
//     } else if (size1 == size2) {
//       return "=";
//     } else {
//       return "<";
//     }
//   } else {
//     return "Enter another size";
//   }
// }

// console.log(findAbiggerSize('M', 'M'));
