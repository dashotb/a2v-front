-- CreateTable
CREATE TABLE "Size" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "Category" TEXT[],

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);
