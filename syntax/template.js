var name ='egoing';
var letter = 'Dear ' + name + 'Lorem ipsum dolor sit amet,\n consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim ' + name + ' veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' + name + ' sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

var letter = `Dear ${name}

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ${name} + veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur

${name} sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
console.log(letter);