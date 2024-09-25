-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "propertyManagerId" INTEGER;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_propertyManagerId_fkey" FOREIGN KEY ("propertyManagerId") REFERENCES "PropertyManager"("id") ON DELETE SET NULL ON UPDATE CASCADE;
