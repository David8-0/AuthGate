import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';
import { TenantModule } from './modules/tenant.module';
import { ProjectsModule } from './modules/project.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/AuthGate'),
    UserModule,
    TenantModule,
    ProjectsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}