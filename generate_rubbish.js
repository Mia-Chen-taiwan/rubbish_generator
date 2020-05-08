function getRandom(array) {
  let length = array.length
  let i = Math.floor(Math.random() * length)
  return array[i]
}

function generateRubbish(options){
    //data
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
      
      }
    const phrase = ['很簡單','很容易','很快','很正常']

    let role = ''
    let roleTask = ''
    let rolePhrase = getRandom(phrase)

    // put tasks in taskBox by role
    if (options === "engineer"){
      role = '工程師'
      roleTask = getRandom(task.engineer)
    }

    if (options === "designer"){
      role = '設計師'
      roleTask = getRandom(task.designer)
    }

    if (options === "entrepreneur"){
      role = '創業家'
      roleTask = getRandom(task.entrepreneur)
    }

    // return error notice if no role selected
    if (role === '') {
      return '別再混了啦!!找個職業吧!!'
    }

    // return rubbish
    let talkRubbish = `身為一個${role}，${roleTask}，一定${rolePhrase}~`
    return talkRubbish

}

module.exports = generateRubbish
