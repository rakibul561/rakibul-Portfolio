/*
  Warnings:

  - The `githubUrl` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `technology` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `features` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "githubUrl",
ADD COLUMN     "githubUrl" TEXT[],
DROP COLUMN "technology",
ADD COLUMN     "technology" TEXT[],
DROP COLUMN "features",
ADD COLUMN     "features" TEXT[];
