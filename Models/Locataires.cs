using System;
using System.Collections.Generic;

namespace Gestionaire_location.Models
{
    public partial class Locataires
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public int? Age { get; set; }
    }
}
