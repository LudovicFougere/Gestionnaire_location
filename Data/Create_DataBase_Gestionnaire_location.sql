USE [master]
GO
/****** Object:  Database [Gestionnaire_location]    Script Date: 27/07/2017 23:01:09 ******/
CREATE DATABASE [Gestionnaire_location]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Blogging', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\Blogging.mdf' , SIZE = 3264KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Blogging_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\Blogging_log.ldf' , SIZE = 832KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [Gestionnaire_location] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Gestionnaire_location].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Gestionnaire_location] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET ARITHABORT OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [Gestionnaire_location] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Gestionnaire_location] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Gestionnaire_location] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Gestionnaire_location] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Gestionnaire_location] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Gestionnaire_location] SET  MULTI_USER 
GO
ALTER DATABASE [Gestionnaire_location] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Gestionnaire_location] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Gestionnaire_location] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Gestionnaire_location] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Gestionnaire_location] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Gestionnaire_location]
GO
/****** Object:  Table [dbo].[Assignment]    Script Date: 27/07/2017 23:01:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Assignment](
	[AssignmentId] [bigint] IDENTITY(1,1) NOT NULL,
	[LocationId] [bigint] NOT NULL,
	[PersonId] [bigint] NOT NULL,
	[AssignmentNote] [varchar](2000) NULL,
	[AssignmentStart] [datetime] NOT NULL,
	[AssignmentEnd] [datetime] NOT NULL,
	[AssignmentRecurrence] [varchar](500) NULL,
 CONSTRAINT [PK_Assignment] PRIMARY KEY CLUSTERED 
(
	[AssignmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Blog]    Script Date: 27/07/2017 23:01:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Blog](
	[BlogId] [int] IDENTITY(1,1) NOT NULL,
	[Url] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Blog] PRIMARY KEY CLUSTERED 
(
	[BlogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Locataires]    Script Date: 27/07/2017 23:01:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Locataires](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [nchar](10) NULL,
	[Prenom] [nchar](10) NULL,
	[Age] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Location]    Script Date: 27/07/2017 23:01:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Location](
	[LocationId] [bigint] IDENTITY(1,1) NOT NULL,
	[LocationName] [varchar](200) NOT NULL,
 CONSTRAINT [PK_Location] PRIMARY KEY CLUSTERED 
(
	[LocationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Person]    Script Date: 27/07/2017 23:01:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Person](
	[PersonId] [bigint] IDENTITY(1,1) NOT NULL,
	[PersonFirstName] [varchar](200) NULL,
	[PersonLastName] [varchar](200) NULL,
	[PersonFullName] [varchar](200) NOT NULL,
 CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED 
(
	[PersonId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Post]    Script Date: 27/07/2017 23:01:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Post](
	[PostId] [int] IDENTITY(1,1) NOT NULL,
	[BlogId] [int] NOT NULL,
	[Content] [nvarchar](max) NULL,
	[Title] [nvarchar](max) NULL,
 CONSTRAINT [PK_Post] PRIMARY KEY CLUSTERED 
(
	[PostId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Reservation]    Script Date: 27/07/2017 23:01:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Reservation](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Date_debut] [date] NULL,
	[Date_fin] [date] NULL,
	[text] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Reservation] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[Post]  WITH CHECK ADD  CONSTRAINT [FK_Post_Blog_BlogId] FOREIGN KEY([BlogId])
REFERENCES [dbo].[Blog] ([BlogId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Post] CHECK CONSTRAINT [FK_Post_Blog_BlogId]
GO
USE [master]
GO
ALTER DATABASE [Gestionnaire_location] SET  READ_WRITE 
GO
