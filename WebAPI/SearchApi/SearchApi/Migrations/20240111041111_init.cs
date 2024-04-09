using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SearchApi.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "newuser",
                columns: table => new
                {
                    userId = table.Column<string>(type: "text", nullable: false),
                    followershipId = table.Column<string>(type: "text", nullable: false),
                    postId = table.Column<string>(type: "text", nullable: false),
                    departmentId = table.Column<string>(type: "text", nullable: false),
                    occupationId = table.Column<string>(type: "text", nullable: false),
                    userprofileId = table.Column<string>(type: "text", nullable: false),
                    username = table.Column<string>(type: "text", nullable: false),
                    password = table.Column<string>(type: "text", nullable: false),
                    email = table.Column<string>(type: "text", nullable: false),
                    fullname = table.Column<string>(type: "text", nullable: false),
                    mobile_number = table.Column<int>(type: "integer", nullable: false),
                    age = table.Column<int>(type: "integer", nullable: false),
                    follower_count = table.Column<string>(type: "text", nullable: false),
                    following_count = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.userId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "newuser");
        }
    }
}
