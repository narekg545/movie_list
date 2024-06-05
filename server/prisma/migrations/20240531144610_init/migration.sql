/*
  Warnings:

  - Changed the type of `publishYear` on the `Movie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "publishYear",
ADD COLUMN     "publishYear" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "publishYear_index" ON "Movie"("publishYear");
