import { Column, Entity, PrimaryColumn } from 'typeorm';
import { GithubRepo } from './github.service';

@Entity()
export class Repo {
  @PrimaryColumn()
  name: string;
  @Column({ type: 'json', nullable: true })
  githubRepo?: GithubRepo;
  @Column({ type: 'int', nullable: true })
  releaseCount?: number;
}
