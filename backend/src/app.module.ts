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
          type: 'postgres',
          host: config.getOrThrow('DB_HOST'),
          port: 5432,
          username: 'db_9dwk_user',
          password: config.getOrThrow('DB_PW'),
          database: 'db_9dwk',
          ssl: true,
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
