BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Name] DROP CONSTRAINT [Name_official_df];
ALTER TABLE [dbo].[Name] ADD CONSTRAINT [Name_official_df] DEFAULT 0 FOR [official];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH