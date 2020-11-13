using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TranspotationTicketBooking.Models
{
    public class BusInfo
    {
        [Key]
        public string BusNo { get; set; }
        public string DriverName { get; set; }
        public long  DriverNo{ get; set; }
        public string CondName { get; set; }
        public long CondNo { get; set; }
        public long MaxSeats { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Verified { get; set; }
    
    }
}
