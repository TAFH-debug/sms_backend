import { Injectable } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { AnnouncementsRepository } from './announcements.repository';

@Injectable()
export class AnnouncementsService {
  constructor(
    private announcementsRepository: AnnouncementsRepository
  ) {}
  
  create(createAnnouncementDto: CreateAnnouncementDto) {
    return this.announcementsRepository.createAnnouncement(createAnnouncementDto);
  }

  findAll() {
    return this.announcementsRepository.getAnnouncements();
  }

  findOne(id: string) {
    return this.announcementsRepository.getAnnouncementById(id);
  }

  update(id: string, updateAnnouncementDto: UpdateAnnouncementDto) {
    return this.announcementsRepository.updateAnnouncement(id, updateAnnouncementDto);
  }

  remove(id: string) {
    return this.announcementsRepository.deleteAnnouncement(id);
  }
}
