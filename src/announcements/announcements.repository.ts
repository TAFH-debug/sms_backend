// Announcements repository file prisma service

import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Announcement } from '@prisma/client';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

@Injectable()
export class AnnouncementsRepository {
  constructor(private prisma: PrismaService) {}

  async createAnnouncement(data: CreateAnnouncementDto): Promise<Announcement> {
    return this.prisma.announcement.create({ data });
  }

  async getAnnouncements(): Promise<Announcement[]> {
    return this.prisma.announcement.findMany();
  }

  async getAnnouncementById(id: string): Promise<Announcement> {
    return this.prisma.announcement.findUnique({ where: { id } });
  }

  async updateAnnouncement(
    id: string,
    data: UpdateAnnouncementDto,
  ): Promise<Announcement> {
    return this.prisma.announcement.update({ where: { id }, data });
  }

  async deleteAnnouncement(id: string): Promise<Announcement> {
    return this.prisma.announcement.delete({ where: { id } });
  }
}