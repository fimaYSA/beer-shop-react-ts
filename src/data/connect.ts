type Date = {
  location: {
    point: string
  }
  phone: {
    numbers: string[]
  }
  email: {
    emails: string[]
  }
}

export const connectData: Date = {
  location: {
    point: 'Россия, Москва, Рязанский проспект 22, к2',
  },
  phone: {
    numbers: ['+7 (495) 740-40-51', '+7 (925) 924-07-00'],
  },
  email: {
    emails: ['wunderbeer@mail.ru'],
  },
}
