import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class Experience {
  @Field(() => ID)
  id: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: string;

  @Field(() => String, { nullable: true })
  endDate?: string | null;

  @Field(() => [String])
  achievements: string[];
}

@ObjectType()
export class Project {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  shortDescription?: string;

  @Field(() => String, { nullable: true })
  githubUrl?: string | null;

  @Field(() => String, { nullable: true })
  linkedInUrl?: string | null;

  @Field(() => [Skill], { nullable: 'items' })
  skills: Skill[];

  @Field(() => [Experience], { nullable: 'items' })
  experiences: Experience[];

  @Field(() => [Project], { nullable: 'items' })
  projects: Project[];
}
