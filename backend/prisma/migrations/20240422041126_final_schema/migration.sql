/*
  Warnings:

  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `products` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `cost_price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(9,2)`.
  - You are about to alter the column `sales_price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(9,2)`.
  - Added the required column `pack_id` to the `packs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `packs` DROP FOREIGN KEY `packs_product_id_fkey`;

-- DropIndex
DROP INDEX `products_code_key` ON `products`;

-- AlterTable
ALTER TABLE `packs` ADD COLUMN `pack_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `cost_price` DECIMAL(9, 2) NOT NULL,
    MODIFY `sales_price` DECIMAL(9, 2) NOT NULL,
    ADD PRIMARY KEY (`code`);

-- CreateIndex
CREATE INDEX `product_id` ON `packs`(`product_id`);

-- AddForeignKey
ALTER TABLE `packs` ADD CONSTRAINT `packs_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products`(`code`) ON DELETE NO ACTION ON UPDATE NO ACTION;
