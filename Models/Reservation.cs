using System;
using System.Collections.Generic;

namespace Gestionaire_location.Models
{
    public partial class Reservation
    {
        public int Id { get; set; }
        public DateTime DateDebut { get; set; }
        public DateTime? DateFin { get; set; }
        public string Text { get; set; }
        public DateTime Eventstart { get; set; }
        public DateTime? Eventend { get; set; }
    }
}
