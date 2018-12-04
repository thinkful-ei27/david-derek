'use strict';

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return location => { 
    warningCounter++;
    let time = (warningCounter === 1) ? 'time' : 'times';
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
  };
}

const monsoonWarning = hazardWarningCreator('monsoon');
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const demonsWarning = hazardWarningCreator('Demons from the Underworld');

monsoonWarning('Bollywood');
rocksWarning('Malibu');
rocksWarning('Mars');
demonsWarning('Kansas');
monsoonWarning('New York');
monsoonWarning('Florida');