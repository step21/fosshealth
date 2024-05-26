import { Column, Entity, PrimaryColumn } from 'typeorm';
import { GithubRepo } from './github.service';
import { OpensaucedData } from './opensauced.service';

@Entity()
export class Repo {
  @PrimaryColumn()
  name: string;
  @Column({ type: 'json', nullable: true })
  githubRepo?: GithubRepo;
  @Column({ type: 'json', nullable: true })
  opensaucedData?: OpensaucedData;
  @Column({ type: 'int', nullable: true })
  releaseCount?: number;
}
