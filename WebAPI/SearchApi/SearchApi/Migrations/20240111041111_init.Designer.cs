﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using SearchApi.Data;

#nullable disable

namespace SearchApi.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20240111041111_init")]
    partial class init
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("SearchApi.Data.newuser", b =>
                {
                    b.Property<string>("userId")
                        .HasColumnType("text");

                    b.Property<int>("age")
                        .HasColumnType("integer");

                    b.Property<string>("departmentId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("follower_count")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("followershipId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("following_count")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("fullname")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("mobile_number")
                        .HasColumnType("integer");

                    b.Property<string>("occupationId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("postId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("userprofileId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("userId");

                    b.ToTable("newuser");
                });
#pragma warning restore 612, 618
        }
    }
}
