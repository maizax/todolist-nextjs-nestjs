import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemEntity } from '../../entities';
import { ItemDto } from '../dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemRepository: Repository<ItemEntity>,
  ) {}

  findItems(): Promise<ItemEntity[]> {
    return this.itemRepository.find();
  }

  createItem(item: ItemDto): Promise<ItemEntity> {
    const newItem = this.itemRepository.create({
      ...item,
      createdAt: new Date(),
    });

    return this.itemRepository.save(newItem);
  }
}
