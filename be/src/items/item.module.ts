import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from '../entities';
import { ItemController } from './controllers';
import { ItemService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
