import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5432, // database port
      database: 'postgres', // name of our database
      autoLoadEntities: true, // models will be loaded automatically (recommended)
      synchronize: true, // your entities will be synced with the database (use cautiously in production)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
