using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;


namespace TranspotationTicketBooking.Models
{
    public partial class TicketBookingDBContext : DbContext
    {

        public TicketBookingDBContext(DbContextOptions<TicketBookingDBContext> options) : base(options)
        {

        }

        public virtual DbSet<BusInfo> BusInfo { get; set; }
        public virtual DbSet<Passenger> Passenger { get; set; }
        public virtual DbSet<Route> Route { get; set; }
        public virtual DbSet<RouteInfo> RouteInfo { get; set; }
        public virtual DbSet<Session> Session { get; set; }
        public virtual DbSet<Ticket> Ticket { get; set; }


    }

}