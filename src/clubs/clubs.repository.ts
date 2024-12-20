import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClubDto } from './dto/create-club.dto';
import { Club } from '@prisma/client';
import { UpdateClubDto } from './dto/update-club.dto';

@Injectable()
export class ClubsRepository {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<Club[]> {
        return this.prisma.club.findMany();
    }

    async findOne(id: string): Promise<Club | null> {
        return this.prisma.club.findUnique({ where: { id } });
    }

    async create(data: CreateClubDto): Promise<Club> {
        return this.prisma.club.create({ data });
    }

    async update(id: string, data: UpdateClubDto): Promise<Club | null> {
        return this.prisma.club.update({ where: { id }, data });
    }

    async delete(id: string): Promise<Club | null> {
        return this.prisma.club.delete({ where: { id } });
    }
}