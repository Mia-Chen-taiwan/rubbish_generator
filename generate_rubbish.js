function getRandom(array) {
  let length = array.length
  let i = Math.floor(Math.random() * length)
  return array[i]
}

function generateRubbish(options){
    //data
    const data = {
        engineer: {
          cn_role: "工程師",
          task: ['加個按鈕','加新功能','切個版', '改一點 code'],
        },

        designer: {
          cn_role: '設計師',
          task: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],

        },

        entrepreneur: {
          cn_role: "創業家",
          task: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
        },
      }
    const phrase = ['很簡單','很容易','很快','很正常']

    const roleData = data[options]

    // return error notice if no role selected
    if (!roleData) {
      return '別再混了啦!!找個職業吧!!'
    }

    // return rubbish
    let talkRubbish = `身為一個${roleData.cn_role}，${getRandom(roleData.task)}，一定${getRandom(phrase)}~`
    return talkRubbish

}

module.exports = generateRubbish
