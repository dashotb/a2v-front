-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "subcategory" TEXT;

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "main" TEXT,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subcategory" TEXT[],

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
