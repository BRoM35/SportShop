using System;

namespace Sportshop
{
    public class CurrentCard
    {
        public int    Id          { get; set; }
        public string Name        { get; set; }
         public double Price       { get; set; }
        public string Photo       { get; set; }
        public int    UserId      { get; set; }
        public int    Amount      { get; set; }
        
    }
}