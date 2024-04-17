using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SeniorProject.Migrations
{
    /// <inheritdoc />
    public partial class addMatchRequesting : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MatchRequests",
                columns: table => new
                {
                    MatchRequestId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SenderPetId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ReceiverPetId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RequestDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ResponseDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MatchRequests", x => x.MatchRequestId);
                    table.ForeignKey(
                        name: "FK_MatchRequests_Pets_ReceiverPetId",
                        column: x => x.ReceiverPetId,
                        principalTable: "Pets",
                        principalColumn: "PetId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_MatchRequests_Pets_SenderPetId",
                        column: x => x.SenderPetId,
                        principalTable: "Pets",
                        principalColumn: "PetId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MatchRequests_ReceiverPetId",
                table: "MatchRequests",
                column: "ReceiverPetId");

            migrationBuilder.CreateIndex(
                name: "IX_MatchRequests_SenderPetId",
                table: "MatchRequests",
                column: "SenderPetId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MatchRequests");
        }
    }
}
