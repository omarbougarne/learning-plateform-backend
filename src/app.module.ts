import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExercicesModule } from './exercices/exercices.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { ExecutionModule } from './execution/execution.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [AuthModule, ExercicesModule, SubmissionsModule, SubmissionsModule, ExecutionModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
