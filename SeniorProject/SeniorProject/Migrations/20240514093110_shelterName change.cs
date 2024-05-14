using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SeniorProject.Migrations
{
    /// <inheritdoc />
    public partial class shelterNamechange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ZipCode",
                table: "Shelters",
                newName: "RepName");

            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Shelters",
                newName: "RepPhone");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Shelters",
                newName: "ShelterName");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Shelters",
                newName: "RepEmail");

            migrationBuilder.RenameColumn(
                name: "AdditionalInformation",
                table: "Shelters",
                newName: "PermitNumber");

            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "Users",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "Users",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AlterColumn<string>(
                name: "WebsiteUrl",
                table: "Shelters",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "State",
                table: "Shelters",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "City",
                table: "Shelters",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "ShelterName",
                table: "Shelters",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "RepPhone",
                table: "Shelters",
                newName: "PhoneNumber");

            migrationBuilder.RenameColumn(
                name: "RepName",
                table: "Shelters",
                newName: "ZipCode");

            migrationBuilder.RenameColumn(
                name: "RepEmail",
                table: "Shelters",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "PermitNumber",
                table: "Shelters",
                newName: "AdditionalInformation");

            migrationBuilder.AlterColumn<string>(
                name: "WebsiteUrl",
                table: "Shelters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "State",
                table: "Shelters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "City",
                table: "Shelters",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
