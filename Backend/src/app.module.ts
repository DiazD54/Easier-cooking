import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorialesModule } from './tutoriales/tutoriales.module';
import { Tutorial } from './tutoriales/tutorial.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dollarfen54',
      database: 'tutoriales',
      entities: [Tutorial],
      synchronize: true,
      logging: true,
    }),
    TutorialesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
