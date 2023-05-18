function getSuperHero(heroes) {
    let highestPower = Math.max(...heroes.map(hero => hero.powerLevel));
    
    let superHeroes = heroes
      .filter(hero => hero.powerLevel === highestPower)
      .map(hero => hero.name);
    
    return superHeroes.length === 1 ? superHeroes[0] : superHeroes;
  }
  
  exports.solution = getSuperHero;