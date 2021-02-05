using Microsoft.EntityFrameworkCore.Migrations;

namespace TranspotationTicketBooking.Migrations
{
    public partial class dubura6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "0f476c77-e215-4a5a-ac11-253400694543");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "1886e57a-b082-456b-b244-d4bd5e429834");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "be96cb52-27ce-4e92-bb21-3dcb1ae0d3cf");

            migrationBuilder.DeleteData(
                table: "IdentityRole",
                keyColumn: "Id",
                keyValue: "c5c54a14-55c8-442f-bd33-b1a7bb6b95fe");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "0f476c77-e215-4a5a-ac11-253400694543", "c7df0dc4-a0fb-4c3d-bc3e-e41abdbb75f1", "Visitor", "VISITOR" },
                    { "be96cb52-27ce-4e92-bb21-3dcb1ae0d3cf", "fc45b42a-ddf5-4b69-80f0-b196d4ce6a21", "Passenger", "PASSENGER" },
                    { "1886e57a-b082-456b-b244-d4bd5e429834", "d3a57131-1a20-4b81-8ee5-42dae3ba76e8", "Busowner", "BUSOWNER" },
                    { "c5c54a14-55c8-442f-bd33-b1a7bb6b95fe", "d4d62b1a-b840-4aa0-89e7-f060929287d2", "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
