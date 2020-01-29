USE [Controle]
GO

/****** Object:  Table [dbo].[CalcConsumos]    Script Date: 29/01/2020 17:55:57 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CalcConsumos](
	[ID] [uniqueidentifier] NOT NULL,
	[kmabas] [int] NULL,
	[qtdlitro] [int] NULL,
	[kmatual] [int] NULL,
	[consumomedio] [int] NULL,
	[kmpercorrido] [int] NULL,
	[updatedAt] [nchar](255) NULL,
	[createdAt] [nchar](255) NULL,
	[timestamps] [nchar](255) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[CalcConsumos] ADD  DEFAULT (newid()) FOR [ID]
GO


