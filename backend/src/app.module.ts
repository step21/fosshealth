import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repo } from './repo.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RepoModule } from './repo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: './db',
          entities: [Repo],
          synchronize: true,
        };
      },
      inject: [ConfigService],
      extraProviders: [ConfigService],
    }),
    RepoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
