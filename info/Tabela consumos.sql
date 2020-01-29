USE [Controle]
GO

/****** Object:  Table [dbo].[CalcConsumos]    Script Date: 29/01/2020 16:30:17 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CalcConsumos](
	[id] [uniqueidentifier] NOT NULL,
	[kmabas] [int] NULL,
	[qtdlitro] [int] NULL,
	[kmatual] [int] NULL,
	[consumomedio] [int] NULL,
	[kmpercorrido] [int] NULL,
	[updatedAt] [varchar](50) NULL,
	[createdAt] [varchar](50) NULL,
	[timestamps] [varchar](50) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[CalcConsumos] ADD  DEFAULT (newid()) FOR [id]
GO


