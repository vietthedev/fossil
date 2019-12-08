// @flow

export type MenuItem = {
  id: number,
  name: string,
  path: string,
  exact?: boolean
}

export type MenuItemAction = {
  type: string,
  payload: any
}

export type Order = {
  id: number,
  name: string,
  level: number,
  quantity: number,
  total: number,
  date: Date,
  status: number
}

export type OrderFilterAction = {
  type: string,
  payload: number
}

export type ContactMethod = {
  icon: string,
  content: string
}

export type GlobalState = {
  user: {
    id: number,
    name: string,
    photoUrl: string
  },
  contact: {
    address: ContactMethod,
    phoneNumber: ContactMethod,
    email: ContactMethod
  },
  menuItems: MenuItem[],
  orders: Order[]
}
