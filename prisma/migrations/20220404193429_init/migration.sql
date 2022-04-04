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
    "principalAddress" TEXT NOT NULL,
    "mailingAddress" TEXT NOT NULL,
    "ceo" TEXT,
    "ceoPhone" TEXT,
    "ceoEmail" TEXT,
    "otherPoc" TEXT,
    "otherPocPhone" TEXT,
    "otherPocEmail" TEXT,
    "tin" INTEGER,
    "womanOwned" BOOLEAN NOT NULL DEFAULT false,
    "veteranOwned" BOOLEAN NOT NULL DEFAULT false,
    "minorityCertified" BOOLEAN NOT NULL DEFAULT false,
    "year" INTEGER NOT NULL,
    "type" TEXT,
    "employees" INTEGER,
    "revenue" INTEGER,
    "industry" TEXT NOT NULL,
    "naicsCode" INTEGER,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Name" ADD CONSTRAINT "Name_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
