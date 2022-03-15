-- CreateTable
CREATE TABLE "Name" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "official" BOOLEAN NOT NULL DEFAULT false,
    "businessId" INTEGER NOT NULL,

    CONSTRAINT "Name_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Name" ADD CONSTRAINT "Name_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
