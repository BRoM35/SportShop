using System.Collections.Generic;
using System.Linq;
using LinqToDB;
using Sportshop;
using Sportshop.Controllers;

namespace DataModels
{
    public static class DB
    {
        // GET
        public static SpeedoDB SpeedoDb { get; } = new SpeedoDB();
        public static IEnumerable<Users> Users { get; }
        public static IEnumerable<Products> Products { get; }
        public static IEnumerable<Category> Category { get; }
        public static IEnumerable<CurrentProducts> OneCart { get; }
        public static IEnumerable<CurrentCard> CCards { get; }
        
        static DB()
        {
            var users = SpeedoDb.GetTable<Users>(); 
            var products = SpeedoDb.GetTable<Products>();
            var cart = SpeedoDb.Productss
                .Join(SpeedoDb.Genderss, p => p.GenderId, g => g.Id, (p, g) => new {p, g})
                .Join(SpeedoDb.Categorys, @t => @t.p.CategoryId, c => c.Id, (@t, c) => new {@t, c})
                .Where(@t => @t.@t.p.GenderId == @t.@t.g.Id && @t.@t.p.CategoryId == @t.c.Id)
                .Select(@t => new CurrentProducts
                {
                    Id = @t.@t.p.Id,
                    Name = @t.@t.p.Name,
                    Description = @t.@t.p.Description,
                    Price = @t.@t.p.Price,
                    Photo = @t.@t.p.Photo,
                    Gender = @t.@t.g.Name,
                    Category = @t.c.Name
                }); 
            var category = SpeedoDb.GetTable<Category>(); 
            var card = SpeedoDb.Cards
                .Join(SpeedoDb.Userss, p => p.UserId, g => g.Id, (p, g) => new {p, g})
                .Join(SpeedoDb.Productss, @t => @t.p.ProductId, c => c.Id, (@t, c) => new {@t, c})
                .Where(@t => @t.@t.p.UserId == @t.@t.g.Id && @t.@t.p.ProductId == @t.c.Id)
                .Select(@t => new CurrentCard
                {
                    Id = @t.@t.p.Id,
                    Name = @t.c.Name,
                    Price = @t.c.Price,
                    Photo = @t.c.Photo,
                    UserId = @t.@t.g.Id,
                    Amount = @t.@t.p.Amount
                }); 
            Users = users;
            Products = products;
            OneCart = cart;
            Category = category;
            CCards = card;
        }
    }
}