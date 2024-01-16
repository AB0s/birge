export const headerLinks = [
    {
      label: 'Негізгі бет',
      route: '/',
    },
    {
      label: 'Оқиға жасау',
      route: '/events/create',
    },
    {
      label: 'Менің профилім',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }