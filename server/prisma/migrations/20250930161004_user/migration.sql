-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "features" TEXT,
ALTER COLUMN "technology" DROP NOT NULL,
ALTER COLUMN "technology" SET DATA TYPE TEXT;
