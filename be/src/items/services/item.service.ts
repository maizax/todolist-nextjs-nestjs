import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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

  editItem(id: number, item: ItemDto): Promise<UpdateResult> {
    const existingItem = this.itemRepository.findOneBy({
      id,
    });
    if (!existingItem) {
      throw Error;
    }

    const updatedItemResult = this.itemRepository.update(
      { id },
      { priority: item.priority, name: item.name },
    );
    return updatedItemResult;
  }

  deleteItem(id: number): Promise<DeleteResult> {
    const existingItem = this.itemRepository.findOneBy({
      id,
    });
    if (!existingItem) {
      throw Error;
    }

    const deletedItem = this.itemRepository.delete({ id });
    return deletedItem;
  }
}
