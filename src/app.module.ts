import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExercicesModule } from './exercices/exercices.module';
import { SubmissiosModule } from './submissios/submissios.module';
import { SubmissionsModule } from './submissions/submissions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, ExercicesModule, SubmissiosModule, SubmissionsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
