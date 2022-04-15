/*
Step 1 : get # of family members from user, store in variable (member count)
Step 2: loop member count time
 -ask user for age
  -add that age to the total
Step 3: Print Total
Step 4: If (total>=100)
    Alet This family is over 100 AAA
Else
   Alert This family is not over 100.
*/
let membercount = prompt ("How many family memebers?");
let total = 0;
for (let i =0; i <membercount; i++){
    let age = Number( prompt("Enter family member age.") );
    total  += age;

}
console.log("The family's cumulative age is " + total + ".");

if (total >= 100) {
    alert("This family is over 100!");
} else {
    alert("This family is not over 100.");
}
