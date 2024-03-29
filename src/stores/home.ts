import { defineStore } from 'pinia'

export const homeStore = defineStore('home', () => {
  const swiperList:ImageItem[] = [{
        path: './images/moiverout1.jpg',
        alt: 'moiverout1.jpg'
      },
      {
        path: './images/moiverout2.jpg',
        alt: 'moiverout2.jpg'
      },
      {
        path: './images/moiverout3.jpg',
        alt: 'moiverout3.jpg'
      },
      {
        path: './images/moiverout4.jpg',
        alt: 'moiverout4.jpg'
      }],
    blackList:CardItem[] = [
      {
        name: '琴酒（Gin，ジン）',
        imgUrl: './images/gin.jpg',
        description:
          '黑衣组织重要成员，经常和伏特加一起出现。是最早登场也是最重要的组织成员之一。银色（动画早期为金色）长发，左撇子。冷酷残忍，头脑冷静，似乎可以毫不犹豫地杀死任何人。经常执行各种暗杀和清除组织内奸的任务，自称从不去记杀掉的人的姓名和长相。是给新一灌下APTX4869使其身体变小的罪魁祸首。爱车是黑色的保时捷356A。'
      },
      {
        name: '伏特加（Vodka，ウォッカ）',
        imgUrl: './images/vodka.jpg',
        description:
          '黑衣组织重要成员，琴酒的搭档，最早登场的组织成员之一。总是带着墨镜。但头脑简单，做事稍不细密。完全服从琴酒且一起行动，尊称琴酒为“大哥”。'
      },
      {
        name: '贝尔摩得（Vermouth，ベルモット，又译苦艾酒）',
        imgUrl: './images/vermouth.jpg',
        description:
          '黑衣组织重要成员。真实身份为美国大明星莎朗·温亚德，因某种原因恢复年轻或停止衰老（具体不详），而后对外宣称为“莎朗的女儿”克丽丝·温亚德。精通易容与变声。负责收集重要情报，是个“秘密主义者”。在纽约的时候，新一和小兰曾救过她，此后一直保护两人。知道柯南和灰原的真实身份，但却并没有上报组织，原因似乎也与她自身原因有关。与Boss有着特殊关系，具体不明。'
      },
      {
        name: '基安蒂（Chianti，キアンティ）',
        imgUrl: './images/chianti.jpg',
        description:
          '黑衣组织中的狙击手，与科恩搭档，有效射程为600码左右，实力强劲。左眼有凤尾蝶图案纹身并且常画很重的眼影。性格激进，痛恨对卡尔瓦多斯见死不救的贝尔摩得。'
      },
      {
        name: '科恩（Korn，コルン）',
        imgUrl: './images/korn.jpg',
        description:
          '黑衣组织中的狙击手，与基安蒂搭档，狙击能力在600码左右，技术出众。性格冷酷、沉默寡言。参与过多次暗杀行动。同样讨厌贝尔摩得。'
      },
      {
        name: '基尔（Kir，キール）',
        imgUrl: './images/kir.jpg',
        description:
          'CIA派入组织的卧底，本名本堂瑛海，化名水无怜奈。伊森·本堂的女儿，本堂瑛祐的姐姐。表面身份为日卖电视台主持人（重回组织后已辞职）。在于一次暗杀政要的行动中遭遇车祸，被FBI当作真正组织成员擒获，一直在医院昏迷。苏醒后FBI才得知其身份，将她送回组织继续完成任务。'
      },
      {
        name: '波本（Bourbon，バーボン）',
        imgUrl: './images/bourbon.jpg',
        description: `日本公安警察派入组织的卧底，本名降谷零，化名安室透。人称“神秘主义者”。曾在小时候与宫野艾莲娜有过接触。表面职业为私家侦探，并在波洛咖啡厅打工，拜毛利小五郎为师。对柯南的身份产生了兴趣。与赤井秀一相互反感，曾伪装成伤疤赤井来试探FBI
        [13] ，后推断出赤井未死及赤井假扮为冲矢昴活动。`
      },
      {
        name: '苏格兰威士忌（Scotch，スコッチ；死亡）',
        imgUrl: './images/scotch.png',
        description:
          '日本公安警察派入组织的卧底，本名诸伏景光，是诸伏高明之弟，安室透的发小和同事。卧底身份暴露后，在组织套问出其名字之前，在赤井秀一面前自杀。'
      },
      {
        name: '雪莉（Sherry，シェリー；已脱离组织）',
        imgUrl: './images/sherry.jpg',
        description:
          '黑衣组织重要成员。本名宫野志保。组织中的科学家，药物APTX4869的制造者。据琴酒所言是“在组织里算是少数头脑顶尖的人”。但在组织杀害她的姐姐宫野明美后以停止研发以示抗议，被组织囚禁时服下APTX4869自尽，却身体恢复幼年并逃出组织。化名灰原哀，阿笠博士将之收留。'
      },
      {
        name: '宫野明美（死亡）',
        imgUrl: './images/gym.jpg',
        description: `黑衣组织的基层成员，宫野志保的姐姐，赤井秀一的女友。因父母都是组织成员而被迫加入组织。为了自己和妹妹能够脱离组织，化名广田雅美，完成了组织交给的抢劫十亿日元的任务，后被琴酒杀害。`
      }
    ]
  return {
    swiperList,
    blackList
  }
})
