BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Name] (
    [id] INT NOT NULL IDENTITY(1,1),
    [content] NVARCHAR(1000) NOT NULL,
    [official] BIT NOT NULL CONSTRAINT [Name_official_df] DEFAULT 0,
    [businessId] INT NOT NULL,
    CONSTRAINT [Name_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Business] (
    [id] INT NOT NULL IDENTITY(1,1),
    [principalAddress] NVARCHAR(1000) NOT NULL,
    [mailingAddress] NVARCHAR(1000) NOT NULL,
    [ceo] NVARCHAR(1000),
    [ceoPhone] NVARCHAR(1000),
    [ceoEmail] NVARCHAR(1000),
    [otherPoc] NVARCHAR(1000),
    [otherPocPhone] NVARCHAR(1000),
    [otherPocEmail] NVARCHAR(1000),
    [tin] INT,
    [womanOwned] BIT NOT NULL CONSTRAINT [Business_womanOwned_df] DEFAULT 0,
    [veteranOwned] BIT NOT NULL CONSTRAINT [Business_veteranOwned_df] DEFAULT 0,
    [minorityCertified] BIT NOT NULL CONSTRAINT [Business_minorityCertified_df] DEFAULT 0,
    [year] INT NOT NULL,
    [type] NVARCHAR(1000),
    [employees] INT,
    [revenue] INT,
    [industry] NVARCHAR(1000) NOT NULL,
    [naicsCode] INT,
    CONSTRAINT [Business_pkey] PRIMARY KEY ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Name] ADD CONSTRAINT [Name_businessId_fkey] FOREIGN KEY ([businessId]) REFERENCES [dbo].[Business]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
