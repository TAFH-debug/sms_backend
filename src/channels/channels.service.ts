import { Injectable } from '@nestjs/common';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChannelsService {

  constructor(private prismaService: PrismaService) {}
  
  create(createChannelDto: CreateChannelDto) {
    return this.prismaService.channel.create({
      data: createChannelDto
    });
  }

  findAll() {
    return this.prismaService.channel.findMany();
  }

  findOne(id: string) {
    return this.prismaService.channel.findUnique({
      where: { id }
    });
  }

  update(id: string, updateChannelDto: UpdateChannelDto) {
    return this.prismaService.channel.update({
      where: { id },
      data: updateChannelDto
    });
  }

  remove(id: string) {
    return this.prismaService.channel.delete({
      where: { id }
    });
  }
}
