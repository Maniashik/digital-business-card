import { Resolver, Query } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { Profile } from './profile.model.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile, { nullable: true })
  async profile() {
    return this.profileService.findOne();
  }
}
