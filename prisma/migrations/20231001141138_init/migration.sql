-- CreateTable
CREATE TABLE "Author" (
    "id" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "votes" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdDt" TIMESTAMP(3) NOT NULL,
    "updatedDt" TIMESTAMP(3) NOT NULL,
    "authorId" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Author_id_key" ON "Author"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;
