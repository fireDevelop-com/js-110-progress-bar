const ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE = 17
const MONSTER_ATTACK_VALUE = 14
const HEAL_VALUE = 20
const MODE_ATTACK = 'ATTACK' // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK' // MODE_STRONG_ATTACK = 1

const BUTTON_ATTACK = document.getElementById('buttonAttack')
const BUTTON_STRONG_ATTACK = document.getElementById('buttonStrongAttack')
const BUTTON_HEAL = document.getElementById('buttonHeal')

const monsterLifeBar = document.getElementById('monsterLifeBar')
const playerLifeBar = document.getElementById('playerLifeBar')
const bonusLifeEl = document.getElementById('bonus-Life')

let monsterMaxLife =100
let monsterLife = monsterMaxLife
let playerLife = monsterMaxLife
let hasBonusLife = true

adjustLifeBars(monsterMaxLife)

function reset() {
  monsterLife = monsterMaxLife
  playerLife = monsterMaxLife
  resetGame(monsterMaxLife)
}

function endRound() {
  const initialPlayerLife = playerLife
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
  playerLife -= playerDamage

  if (playerLife <= 0 && hasBonusLife) {
    hasBonusLife = false
    removeBonusLife()
    playerLife = initialPlayerLife
    setPlayerLife(initialPlayerLife)
    alert('You would be dead but the bonus Life saved you!')
  }

  if (monsterLife <= 0 && playerLife > 0) {
    alert('You won!')
 
  } else if (playerLife <= 0 && monsterLife > 0) {
    alert('You lost!')

  } else if (playerLife <= 0 && monsterLife <= 0) {
    alert('You have a draw!')
  }

  if (monsterLife <= 0 || playerLife <= 0) {
    reset()
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE
  const damage = dealMonsterDamage(maxDamage)
  monsterLife -= damage
  endRound()
}

function attackHandler() {
  attackMonster(MODE_ATTACK)
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK)
}

function healPlayerHandler() {
  let healValue
  if (playerLife >= monsterMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial Life.")
    healValue = monsterMaxLife - playerLife
  } else {
    healValue = HEAL_VALUE
  }
  increasePlayerLife(healValue)
  playerLife += healValue
  endRound()
}


BUTTON_ATTACK.addEventListener('click', attackHandler)
BUTTON_STRONG_ATTACK.addEventListener('click', strongAttackHandler)
BUTTON_HEAL.addEventListener('click', healPlayerHandler)
