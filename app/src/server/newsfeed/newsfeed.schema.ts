import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Media {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;
}

@ObjectType()
export class Category {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;
}

@ObjectType()
export class Newsfeed {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  url!: string;

  @Field(() => [Category])
  category!: [Category];

  @Field(() => Media)
  media!: Media;

  @Field(() => Number)
  last_publish_date!: number;

  @Field(() => Number)
  created_at!: number;

  @Field(() => Number)
  updated_at!: number;
}
