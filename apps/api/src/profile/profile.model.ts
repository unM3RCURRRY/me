import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field()
  name!: string;

  @Field()
  position!: string;

  @Field()
  bio!: string;
}