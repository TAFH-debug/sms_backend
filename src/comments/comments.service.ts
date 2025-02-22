import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  // Comments Service

  constructor(private prismaService: PrismaService) {}

  create(createCommentDto: CreateCommentDto) {
    return this.prismaService.comment.create({
      data: {
        content: createCommentDto.content,
        author: {
          connect: { id: createCommentDto.authorId },
        },
        post: {
          connect: { id: createCommentDto.postId },
        },
      },
    });
  }

  // Find All Comments
  findAll() {
    return this.prismaService.comment.findMany();
  }

  // Find One Comment
  findOne(id: string) {
    return this.prismaService.comment.findUnique({
      where: { id },
    });
  }

  // Update Comment
  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.prismaService.comment.update({
      where: { id },
      data: updateCommentDto,
    });
  }

  // Remove Comment
  remove(id: string) {
    return this.prismaService.comment.delete({
      where: { id },
    });
  }
}
