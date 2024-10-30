import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorialesService } from './tutoriales.service';
import { TutorialesController } from './tutoriales.controller';
import { Tutorial } from './tutorial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tutorial])],
  controllers: [TutorialesController],
  providers: [TutorialesService],
})
export class TutorialesModule {}
