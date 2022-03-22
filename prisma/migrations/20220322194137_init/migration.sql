BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Name] (
    [id] INT NOT NULL IDENTITY(1,1),
    [content] NVARCHAR(1000) NOT NULL,
    [official] BIT NOT NULL CONSTRAINT [Name_official_df] DEFAULT 1,
    [businessId] INT NOT NULL,
    CONSTRAINT [Name_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Business] (
    [id] INT NOT NULL IDENTITY(1,1),
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
