function countBarks(bark) {
    return bark.split('woof').length - 1;
  }
  
  exports.solution = countBarks;