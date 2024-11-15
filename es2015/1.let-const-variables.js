/* eslint-disable vars-on-top */
/* eslint-disable camelcase */
/* eslint-disable no-var */

var filePath = 'es2015/1.let-const-variables.js';
console.log('-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
console.log(filePath);

var allWorked = false;

var rootLetSet = false;
var rootLetSet_Text = '`let` ROOT `a` set to `1`';
var blockLetSet = false;
var blockLetSet_Text = '`let` BLOCK `a` set to `2`';
var blockLetReassigned = false;
var blockLetReassigned_Text = '`let` BLOCK `a` reassigned to `3`';
var rootLet_Not_Reassigned = false;
var rootLet_Not_Reassigned_Text = '`let` ROOT `a` still set to `1`';
var rootLetReassigned = false;
var rootLetReassigned_Text = '`let` ROOT `a` reassigned to `4`';

var rootConstSet = false;
var rootConstSet_Text = '`const` ROOT `x` set to `9`';
var blockConstSet = false;
var blockConstSet_Text = '`const` BLOCK `x` set to `8`';
var beforeBlockConstReassigned = false;
var blockConstReassigned = false;
var blockConst_Not_Reassigned = false;
var blockConst_Not_Reassigned_Text = '`const` BLOCK `x` still set to `8`, not reassigned to 7.';
var rootConst_Not_Reassigned = false;
var rootConst_Not_Reassigned_Text = '`const` ROOT `x` still set to `9`';

var es2015ListElement = document.getElementById('ECMAScript-2015'); // Old, but should have the best compatibility for testing.

try {
  let a = 1;
  console.log(a === 1, rootLetSet_Text);
  rootLetSet = a === 1;

  if (a === 1) {
    // Block var'
    let a = 2; // eslint-disable-line no-shadow
    console.log(a === 2, blockLetSet_Text);
    blockLetSet = a === 2;

    a = 3;
    console.log(a === 3, blockLetReassigned_Text);
    blockLetReassigned = a === 3;
  }

  console.log(a === 1, rootLet_Not_Reassigned_Text);
  rootLet_Not_Reassigned = a === 1;

  a = 4;
  console.log(a === 4, rootLetReassigned_Text);
  rootLetReassigned = a === 4;

  const x = 9;
  console.log(x === 9, rootConstSet_Text);
  rootConstSet = x === 9;

  try {
    // Block Scope var'
    const x = 8; // eslint-disable-line no-shadow
    console.log(x === 8, blockConstSet_Text);
    blockConstSet = x === 8;

    beforeBlockConstReassigned = true; // A test to check we got this far. Otherwise we could get false results.

    x = 7; // eslint-disable-line no-const-assign
    // POP!
    blockConstReassigned = true;
  } catch (error) {
    if (error.message === 'Assignment to constant variable.') {
      var logicBombText = 'blockConst_Not_Reassigned === (blockConstSet === true && beforeBlockConstReassigned && blockConstReassigned === false)'; // I know this is not a "Logic Bomb", but a mess of logic ready to go off at any time.
      blockConst_Not_Reassigned = (
        blockConstSet === true
        && beforeBlockConstReassigned
        && blockConstReassigned === false
      );
      // Checking nothing is hard, but I think I have sorted it out :/
      console.log(blockConst_Not_Reassigned, blockConst_Not_Reassigned_Text, blockConstSet === true, beforeBlockConstReassigned, blockConstReassigned === false);
      console.log(blockConst_Not_Reassigned, blockConstSet === true, beforeBlockConstReassigned, blockConstReassigned === false, logicBombText);
    } else {
      throw error;
    }
  }

  console.log(x === 9, rootConst_Not_Reassigned_Text);
  rootConst_Not_Reassigned = x === 9;

  // TODO: use the every tool? or something else, as this is not very maintainable :'(
  allWorked = (
    rootLetSet
    && blockLetSet
    && blockLetReassigned
    && rootLet_Not_Reassigned
    && rootLetReassigned
    && rootConstSet
    && blockConstSet
    && beforeBlockConstReassigned
    && !blockConstReassigned // Not Reassigned is good
    && blockConst_Not_Reassigned
    && rootConst_Not_Reassigned
  );
} catch (error) {
  console.log('OPPS!', filePath, 'failed somehow :(');
  console.log(error);
  throw error;
}

updateDOM(es2015ListElement, filePath, allWorked);
// Show/Hide
updateDOM(es2015ListElement, rootLetSet_Text, rootLetSet);
updateDOM(es2015ListElement, blockLetSet_Text, blockLetSet);
updateDOM(es2015ListElement, blockLetReassigned_Text, blockLetReassigned);
updateDOM(es2015ListElement, rootLet_Not_Reassigned_Text, rootLet_Not_Reassigned);
updateDOM(es2015ListElement, rootLetReassigned_Text, rootLetReassigned);
updateDOM(es2015ListElement, rootConstSet_Text, rootConstSet);
updateDOM(es2015ListElement, blockConstSet_Text, blockConstSet);
updateDOM(es2015ListElement, blockConst_Not_Reassigned_Text, blockConst_Not_Reassigned);
updateDOM(es2015ListElement, rootConst_Not_Reassigned_Text, rootConst_Not_Reassigned);

console.log('DONE -=-', filePath);
