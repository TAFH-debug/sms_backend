import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ClubsRepository } from './clubs.repository';

@Injectable()
export class ClubsService {
  constructor(private readonly clubRepository: ClubsRepository) {}

  async create(createClubDto: CreateClubDto) {
    return this.clubRepository.create(createClubDto);
  }

  async update(id: string, updateClubDto: UpdateClubDto) {
    const club = await this.clubRepository.findOne(id);
    if (!club) {
      throw new Error('Club not found');
    }
    const updatedClub = { ...club, ...updateClubDto };
    return this.clubRepository.update(id, updatedClub);
  }

  async delete(id: string) {
    const club = await this.clubRepository.findOne(id);
    if (!club) {
      throw new Error('Club not found');
    }
    return this.clubRepository.delete(id);
  }

  async get(id: string) {
    return this.clubRepository.findOne(id);
  }

  async getAll() {
    return this.clubRepository.findAll();
  }
}
