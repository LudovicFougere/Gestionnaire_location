using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Gestionaire_location.Models
{
    public partial class Reservation
    {
        public int Id { get; set; }
        [DataType(DataType.Date)]
        public DateTime DateDebut { get; set; }
        [DataType(DataType.Date)]
        public DateTime DateFin { get; set; }
        public string Text { get; set; }
    }
}
