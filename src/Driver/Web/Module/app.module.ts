import { Module } from '@nestjs/common'
import { AppController } from '@/Driver/Web/Controller/app.controller'
import { AppService } from '@/Driver/Web/Service/app.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
