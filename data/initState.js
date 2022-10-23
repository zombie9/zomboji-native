export const initState = {
  layers: [
    {
      key: 1,
      name: 'head',
      selected: 0,
      options: [
        {
          id: 0,
          zindex: 0,
          uri: null
        },
        {
          id: 1,
          zindex: 40,
          uri: require('../assets/images/zomboji-11.png')
        },
        {
          id: 2,
          zindex: 40,
          uri: require('../assets/images/zomboji-12.png')
        },
        {
          id: 3,
          zindex: 48,
          uri: require('../assets/images/zomboji-13.png')
        }
      ]
    },
    {
      key: 2,
      name: 'eyes',
      selected: 0,
      options: [
        {
          id: 0,
          zindex: 0,
          uri: null
        },
        {
          id: 1,
          zindex: 30,
          uri: require('../assets/images/zomboji-8.png')
        },
        {
          id: 2,
          zindex: 45,
          uri: require('../assets/images/zomboji-9.png')
        },
        {
          id: 3,
          zindex: 30,
          uri: require('../assets/images/zomboji-10.png')
        }
      ]
    },
    {
      key: 3,
      name: 'nose',
      selected: 0,
      options: [
        {
          id: 0,
          zindex: 0,
          uri: null
        },
        {
          id: 1,
          zindex: 20,
          uri: require('../assets/images/zomboji-5.png')
        },
        {
          id: 2,
          zindex: 20,
          uri: require('../assets/images/zomboji-6.png')
        },
        {
          id: 3,
          zindex: 20,
          uri: require('../assets/images/zomboji-7.png')
        }
      ]
    },
    {
      key: 4,
      name: 'beard',
      selected: 0,
      options: [
        {
          id: 0,
          zindex: 0,
          uri: null
        },
        {
          id: 1,
          zindex: 10,
          uri: require('../assets/images/zomboji-2.png')
        },
        {
          id: 2,
          zindex: 10,
          uri: require('../assets/images/zomboji-3.png')
        },
        {
          id: 3,
          zindex: 10,
          uri: require('../assets/images/zomboji-4.png')
        }
      ]
    }
  ]
};

export default initState;
