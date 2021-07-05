import { Module } from '@nestjs/common';
import { AppController } from '@/Products/Driver/Web/app.controller';
import { AppService } from '@/Products/Driver/Web/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
