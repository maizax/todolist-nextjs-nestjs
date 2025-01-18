import { Body, Controller, Get, Post } from '@nestjs/common';

import { ItemService } from '../services';
import { ItemDto } from '../dto';
import { Item } from '../../entities';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  getItems(): Promise<Item[]> {
    return this.itemService.findItems();
  }

  @Post()
  addItem(@Body() item: ItemDto): void {
    this.itemService.createItem(item);
  }
}
