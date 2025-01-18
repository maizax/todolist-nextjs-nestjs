import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemService } from '../services';
import { ItemDto } from '../dto';
import { ItemEntity } from '../../entities';

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
}
