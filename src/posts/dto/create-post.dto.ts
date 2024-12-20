// id    String   @id @default(auto()) @map("_id") @db.ObjectId
// content String

// likedUsersIDs  String[] @db.ObjectId
// likedUsers  User[] @relation(fields: [likedUsersIDs], references: [id])

// comments    Comment[]

// createdAt   DateTime @default(now())

export class CreatePostDto {
    content: string;
    
}
