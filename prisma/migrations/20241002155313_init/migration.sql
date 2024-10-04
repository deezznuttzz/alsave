/*
  Warnings:

  - You are about to drop the column `accesstoken` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `refreshtoken` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `accesstoken`,
    DROP COLUMN `name`,
    DROP COLUMN `refreshtoken`,
    ADD COLUMN `refreshToken` TEXT NULL;
