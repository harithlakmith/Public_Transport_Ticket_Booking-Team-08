using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TranspotationTicketBooking.Models
{
    public class FindRId
    {
        public long RouteID { get; set; }
        public long ToHoltId { get; set; }
        public long FromHoltId { get; set; }
    }
}
