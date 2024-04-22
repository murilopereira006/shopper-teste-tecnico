/*
  Warnings:

  - You are about to alter the column `pack_id` on the `packs` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `packs` MODIFY `pack_id` INTEGER NOT NULL;
