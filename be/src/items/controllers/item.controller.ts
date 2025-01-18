import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemService } from '../services';
import { ItemDto } from '../dto';
import { ItemEntity } from '../../entities';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  getItems(): Promise<ItemEntity[]> {
    return this.itemService.findItems();
  }

  @Post()
  addItem(@Body() item: ItemDto): Promise<ItemEntity> {
    return this.itemService.createItem(item);
  }

  @Put(':id')
  editItem(
    @Param('id') id: number,
    @Body() item: ItemDto,
  ): Promise<UpdateResult> {
    return this.itemService.editItem(id, item);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: number): Promise<DeleteResult> {
    return this.itemService.deleteItem(id);
  }
}
