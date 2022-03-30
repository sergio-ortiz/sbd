BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Business] ADD [minorityCertified] BIT NOT NULL CONSTRAINT [Business_minorityCertified_df] DEFAULT 0,
[veteranOwned] BIT NOT NULL CONSTRAINT [Business_veteranOwned_df] DEFAULT 0,
[womanOwned] BIT NOT NULL CONSTRAINT [Business_womanOwned_df] DEFAULT 0;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
