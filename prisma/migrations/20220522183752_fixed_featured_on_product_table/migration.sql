/*
  Warnings:

  - You are about to drop the column `feature` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `feature`,
    ADD COLUMN `featured` BOOLEAN NOT NULL DEFAULT false;
