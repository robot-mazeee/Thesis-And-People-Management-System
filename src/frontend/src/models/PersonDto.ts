export default class PersonDto {
  id?: number
  name?: string
  email?: string
  istId?: string
  type?: string

  constructor(obj?: Partial<PersonDto>) {
    Object.assign(this, obj)
  }
}
