﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SeniorProject.Migrations
{
    /// <inheritdoc />
    public partial class healthInfoadd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HealthInfo",
                table: "Pets",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HealthInfo",
                table: "Pets");
        }
    }
}
