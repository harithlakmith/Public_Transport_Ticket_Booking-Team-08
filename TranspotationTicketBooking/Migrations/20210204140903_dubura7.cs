using Microsoft.EntityFrameworkCore.Migrations;

namespace TranspotationTicketBooking.Migrations
{
    public partial class dubura7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "35fd0b10-2883-4726-b35e-870054fc83e0");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "5f4221b2-6564-4041-8ac6-1609af698370");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "66057f70-c0e2-4c66-9426-d0780d2d2578");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "77d6ce64-cd6e-485d-90e5-6dad0d923087");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "cf55bed2-1cc1-479a-99ba-ad948969d6e6", "4fb54a7f-972a-4b20-9015-5a981d49a873", "Visitor", "VISITOR" },
                    { "72b309b0-e320-477c-8312-53b2ae670e46", "795f0481-e6c9-4c5c-8d57-08c300efaed7", "Passenger", "PASSENGER" },
                    { "4e5359c8-850b-44d4-b890-c01292d3dddd", "a93d5094-beec-461b-8754-c7c118160fc6", "Busowner", "BUSOWNER" },
                    { "4dbbb28e-5123-4484-88d3-83b7ce4c9ef9", "e9c6972b-67d8-4c20-9de8-1dc154dcbbb5", "Administrator", "ADMINISTRATOR" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "4dbbb28e-5123-4484-88d3-83b7ce4c9ef9");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "4e5359c8-850b-44d4-b890-c01292d3dddd");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "72b309b0-e320-477c-8312-53b2ae670e46");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "cf55bed2-1cc1-479a-99ba-ad948969d6e6");

            migrationBuilder.InsertData(
                table: "IdentityRole",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "35fd0b10-2883-4726-b35e-870054fc83e0", "43c171ee-4195-4b6b-b441-5b7ab1345e50", "Visitor", "VISITOR" },
                    { "66057f70-c0e2-4c66-9426-d0780d2d2578", "b8a7f4a8-f356-47a3-8da1-e86b9d440e2c", "Passenger", "PASSENGER" },
                    { "77d6ce64-cd6e-485d-90e5-6dad0d923087", "c5c3f347-6617-45d6-91c9-7adc8cd7ad28", "Busowner", "BUSOWNER" },
                    { "5f4221b2-6564-4041-8ac6-1609af698370", "acdbdbf0-7807-4902-a2dc-c188347f0b27", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
