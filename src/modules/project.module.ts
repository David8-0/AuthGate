import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, projectSchema } from 'src/domain/entities/project.entity';
import { ProjectService } from 'src/infrastructure/services/project.service';
import { ProjectsController } from 'src/presentation/controllers/project.controller';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: projectSchema }]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectsModule {}