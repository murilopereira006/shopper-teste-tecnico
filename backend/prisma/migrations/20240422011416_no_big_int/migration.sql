/*
  Warnings:

  - You are about to alter the column `product_id` on the `packs` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `code` on the `products` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `packs` DROP FOREIGN KEY `packs_product_id_fkey`;

-- AlterTable
ALTER TABLE `packs` MODIFY `product_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `code` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `packs` ADD CONSTRAINT `packs_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
