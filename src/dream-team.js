const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) { 
    return false; 
  }
  const teamname = [];
  for (const name of members) {
    if (typeof name == 'string') {
      teamname.push((name.match(/[a-z]/i, '')[0]).toUpperCase());
    }
  }

  return teamname.length > 0 ? teamname.sort().join('') : false;
};
