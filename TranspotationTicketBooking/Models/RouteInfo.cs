using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TranspotationTicketBooking.Models
{
    public class RouteInfo
    {
        [Key]
        public int Id { get; set; }
        public long RId { get; set; }
        public long HoltId { get; set; }
        public string HoltName { get; set; }
        public float Price { get; set; }
        public DateTime Time { get; set; }
        public float Distance { get; set; }
       
    }
}
