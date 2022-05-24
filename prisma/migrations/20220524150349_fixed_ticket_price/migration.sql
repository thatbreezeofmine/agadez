/*
  Warnings:

  - You are about to drop the column `price` on the `type` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `price` DECIMAL(65, 30) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `type` DROP COLUMN `price`;
