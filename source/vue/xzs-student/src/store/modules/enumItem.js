// initial state
const state = {
  user: {
    sexEnum: [{ key: 1, value: '男' }, { key: 2, value: '女' }],
    levelEnum: [{ key: 1, value: '淮安消防救援支队' }, { key: 2, value: '大队' }],
    roleEnum: [{ key: 1, value: '消防员' }, { key: 2, value: '指导员' }, { key: 3, value: '管理员' }],
    message: {
      readTag: [{ key: true, value: 'success' }, { key: false, value: 'warning' }],
      readText: [{ key: true, value: '已读' }, { key: false, value: '未读' }]
    }
  },
  exam: {
    examPaper: {
      paperTypeEnum: [{ key: 1, value: '固定试卷' }, { key: 4, value: '时段试卷' }]
    },
    examPaperAnswer: {
      statusEnum: [{ key: 1, value: '待批改' }, { key: 2, value: '完成' }],
      statusTag: [{ key: 1, value: 'warning' }, { key: 2, value: 'success' }]
    },
    question: {
      typeEnum: [{ key: 1, value: '单选题' }, { key: 2, value: '多选题' }, { key: 3, value: '判断题' }, { key: 4, value: '填空题' }, { key: 5, value: '简答题' }],
      answer: {
        doRightTag: [{ key: true, value: 'success' }, { key: false, value: 'danger' }, { key: null, value: 'warning' }],
        doRightEnum: [{ key: true, value: '正确' }, { key: false, value: '错误' }, { key: null, value: '待批改' }],
        doCompletedTag: [{ key: false, value: 'info' }, { key: true, value: 'success' }]
      }
    }
  }
}

// getters
const getters = {
  enumFormat: (state) => (arrary, key) => {
    return format(arrary, key)
  }
}

// actions
const actions = {}

// mutations
const mutations = {}

const format = function (array, key) {
  for (let item of array) {
    if (item.key === key) {
      return item.value
    }
  }
  return null
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
