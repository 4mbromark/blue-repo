import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlueUserModule } from './blue-user/blue-user.module';

@Module({
  imports: [BlueUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
