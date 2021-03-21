import { define } from 'typeorm-seeding'
import { User } from '../entities/user.entity'
import * as Faker from 'faker/locale/ja'

define(User, (faker: typeof Faker) => {
  const user = new User()
  user.id = 1
  user.firstName = faker.internet.userName()
  user.lastName = faker.internet.userName()
  user.age = 40

  return user
})
