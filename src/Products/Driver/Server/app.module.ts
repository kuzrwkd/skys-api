import { Module } from '@nestjs/common';
import { AppController } from '@/Products/Driver/Server/app.controller';
import { AppService } from '@/Products/Driver/Server/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
