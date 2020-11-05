﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TranspotationTicketBooking.Models
{
    public class Session
    {
        [Key]
        public long SId { get; set; }
        public long BusNo { get; set; }
        public long RId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime Date { get; set; }
        public int Seats { get; set; }
    }
}
