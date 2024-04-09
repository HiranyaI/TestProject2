using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SearchApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "departmentId",
                table: "newuser");

            migrationBuilder.DropColumn(
                name: "email",
                table: "newuser");

            migrationBuilder.DropColumn(
                name: "follower_count",
                table: "newuser");

            migrationBuilder.DropColumn(
                name: "followershipId",
                table: "newuser");

            migrationBuilder.DropColumn(
                name: "following_count",
                table: "newuser");

            migrationBuilder.DropColumn(
                name: "fullname",
                table: "newuser");

            migrationBuilder.DropColumn(
                name: "mobile_number",
                table: "newuser");

            migrationBuilder.DropColumn(
                name: "occupationId",
                table: "newuser");

            migrationBuilder.DropColumn(
                name: "password",
                table: "newuser");

            migrationBuilder.RenameColumn(
                name: "userprofileId",
                table: "newuser",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "username",
                table: "newuser",
                newName: "departmentname");

            migrationBuilder.RenameColumn(
                name: "postId",
                table: "newuser",
                newName: "bio");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "name",
                table: "newuser",
                newName: "userprofileId");

            migrationBuilder.RenameColumn(
                name: "departmentname",
                table: "newuser",
                newName: "username");

            migrationBuilder.RenameColumn(
                name: "bio",
                table: "newuser",
                newName: "postId");

            migrationBuilder.AddColumn<string>(
                name: "departmentId",
                table: "newuser",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "newuser",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "follower_count",
                table: "newuser",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "followershipId",
                table: "newuser",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "following_count",
                table: "newuser",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "fullname",
                table: "newuser",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "mobile_number",
                table: "newuser",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "occupationId",
                table: "newuser",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "password",
                table: "newuser",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
