using Microsoft.EntityFrameworkCore.Migrations;

namespace TranspotationTicketBooking.Migrations
{
    public partial class dubura8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                    { "3532d779-9327-4d51-a1ba-0690d6ec1e31", "35099626-9328-4394-8070-98b0ab869854", "Visitor", "VISITOR" },
                    { "78039f45-5aa7-4bfa-b3ec-0adea1d4f016", "43620d41-f39e-4dec-9290-b65a92746551", "Passenger", "PASSENGER" },
                    { "c9adafca-c20a-4825-9f1e-6544764e362c", "c80bc4b4-b845-453b-b3b7-c1e90d54a11c", "Busowner", "BUSOWNER" },
                    { "b421acd0-ca11-4906-9f2f-1d2ec1a5ec47", "ecc5ef41-39bd-4baf-9a68-5e66fc825bab", "Administrator", "ADMINISTRATOR" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "3532d779-9327-4d51-a1ba-0690d6ec1e31");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "78039f45-5aa7-4bfa-b3ec-0adea1d4f016");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "b421acd0-ca11-4906-9f2f-1d2ec1a5ec47");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "c9adafca-c20a-4825-9f1e-6544764e362c");

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
    }
}
