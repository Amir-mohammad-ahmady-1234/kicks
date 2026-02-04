-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'USER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `specs` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `discount` INTEGER NULL,
    `mainImage` VARCHAR(191) NOT NULL,
    `images` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `star` DOUBLE NULL,
    `gender` ENUM('men', 'women') NOT NULL DEFAULT 'men',
    `colors` JSON NOT NULL,
    `size` JSON NOT NULL,
    `category` ENUM('crocs', 'nirkenstock', 'clarks', 'timberland', 'allen', 'oofos', 'sorel', 'hunter') NOT NULL DEFAULT 'crocs',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suggests` (
    `productId` VARCHAR(191) NOT NULL,
    `suggestedId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `suggests_productId_suggestedId_key`(`productId`, `suggestedId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `suggests` ADD CONSTRAINT `suggests_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `suggests` ADD CONSTRAINT `suggests_suggestedId_fkey` FOREIGN KEY (`suggestedId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
