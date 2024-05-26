import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repo } from './repo.entity';

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private usersRepository: Repository<Repo>,
  ) {}

  findAll(): Promise<Repo[]> {
    return this.usersRepository.find();
  }

  async findAllMapped() {
    const items = await this.findAll();
    return items.map((item) => ({
      name: item.name,
      stars: item?.githubRepo.stargazers_count,
      watcher: item?.githubRepo.subscribers_count,
      issues: item?.githubRepo.open_issues_count,
    }));
  }

  async upsert(name: string, data: Partial<Repo>): Promise<any> {
    await this.usersRepository.upsert({ name, ...data }, ['name']);
  }
}
