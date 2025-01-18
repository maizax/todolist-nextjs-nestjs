import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from '../../entities';
import { ItemDto } from '../dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  findItems(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  createItem(item: ItemDto): Promise<Item> {
    const newItem = this.itemRepository.create({
      ...item,
      createdAt: new Date(),
    });

    return this.itemRepository.save(newItem);
  }
}
