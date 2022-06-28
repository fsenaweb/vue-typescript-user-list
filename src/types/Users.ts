export type User = {
  address: Address
  company: Company
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

export interface Address {
  city: string
  street: string
  suite: string
  zipcode: string
}

export interface Company {
  name: string
}
