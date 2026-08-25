import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './profile.model';

@Resolver(() => Profile)
export class ProfileResolver {
  @Query(() => Profile)
  profile(): Profile {
    return {
      name: 'Alexander Cherdak',
      position: 'FullStack Developer',
      bio: 'Genius, billionaire, playboy, philanthropist',
    };
  }
}