const initial_state = {
  current: {
    background_color: 'white',
    font_family: 'aaa'
  },
  posts: {
    1: {
    },
    2: {
    },
    3: {
    },
  },
  topdes: {
    1: {
      title: 'japen food',
      category: 'Japan',
      img: 'https://img21.lyntour.com/2018/09/13/DSC05162.jpg',
      content: '일본가서 두부 먹다',
      author: 'julia',
      date: 12341231
    },
    2: {
      title: '오사카',
      category: 'Japan',
      img: 'https://img21.lyntour.com/2018/09/13/DSC05159.jpg',
      content: '일본 음식점에 가다',
      author: 'alex',
      date: 12341231
    },
    3: {
      title: 'foo',
      category: 'Korea',
      img: 'https://img21.lyntour.com/2018/09/13/DSC05158.jpg',
      content: '사진찍고',
      author: 'foo',
      date: 12341231
    },
    4: {
      title: 'top destination 4',
      category: 'Canada',
      img: 'https://img21.lyntour.com/2018/09/13/DSC05158.jpg',
      content: '사진찍고',
      author: 'foo',
      date: 12341231
    }
  },
  toplists: {
    '1': {
      title: 'Countries',
      list: []

    },
    '2': {
      title: 'Cities',
      list: []
    },
    '3': {
      title: 'Attractions',
      list: []
    }
  }
}

export default initial_state
