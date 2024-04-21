-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` BIGINT NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cost_price` DECIMAL(65, 30) NOT NULL,
    `sales_price` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `products_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `packs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pack_id` BIGINT NOT NULL,
    `product_id` BIGINT NOT NULL,
    `qty` INTEGER NOT NULL,

    UNIQUE INDEX `packs_product_id_key`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `packs` ADD CONSTRAINT `packs_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
