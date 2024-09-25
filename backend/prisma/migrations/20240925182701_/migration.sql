/*
  Warnings:

  - The values [apartment,house] on the enum `PropertyType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PropertyType_new" AS ENUM ('Apartment', 'House', 'Duplex', 'Studio');
ALTER TABLE "Property" ALTER COLUMN "type" TYPE "PropertyType_new" USING ("type"::text::"PropertyType_new");
ALTER TYPE "PropertyType" RENAME TO "PropertyType_old";
ALTER TYPE "PropertyType_new" RENAME TO "PropertyType";
DROP TYPE "PropertyType_old";
COMMIT;
