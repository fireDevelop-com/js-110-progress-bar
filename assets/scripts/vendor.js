function adjustLifeBars(maxLife) {
  monsterLifeBar.max = maxLife
  monsterLifeBar.value = maxLife
  playerLifeBar.max = maxLife
  playerLifeBar.value = maxLife
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage
  monsterLifeBar.value = +monsterLifeBar.value - dealtDamage
  document.getElementById('monsterLifePercent').textContent =  Math.round(monsterLife)
  return dealtDamage
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage
  playerLifeBar.value = +playerLifeBar.value - dealtDamage
  document.getElementById('userLifePercent').textContent =  Math.round(playerLife)
  return dealtDamage
}

function increasePlayerLife(healValue) {
  playerLifeBar.value = +playerLifeBar.value + healValue
}

function resetGame(value) {
  playerLifeBar.value = value
  monsterLifeBar.value = value
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl)
}

function setPlayerLife(Life) {
  playerLifeBar.value = Life
}
