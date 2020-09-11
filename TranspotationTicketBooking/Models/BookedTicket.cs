using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TranspotationTicketBooking.Models
{
    public class BookedTicket
    {
        [Key]
        public string Id { get; set; }
        public string TicketRef { get; set; }
        public string BusNo { get; set; }
        public string RouteId { get; set; }
        public string TurnId { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string TeleNo { get; set; }
        public string NICNo { get; set; }
        public Int64 Seats { get; set; }
        public float Paid { get; set; }
        public string PaymentMethod { get; set; }
        public DateTime Date { get; set; }

    }
}
