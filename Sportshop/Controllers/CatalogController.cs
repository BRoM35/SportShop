using System;
using System.Collections.Generic;
using System.Linq;
using System.Collections;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AppLib;
using DataModels;
using JetBrains.Annotations;
using LinqToDB;
using Microsoft.AspNetCore.Mvc;

namespace Sportshop.Controllers
{
    [Route("catalog")]
    public class Catalog : ControllerBase
    {
        [HttpGet("")]
        public IEnumerable<Products> Get() => DB.Products;

        [HttpGet("{id?}")]
        public CurrentProducts Get(int? id)
        {
            return DB.OneCart.FirstOrDefault(c => c.Id == id);
        }
    }
    
    [Route("category")]
    public class CategoryList : ControllerBase
    {
        [HttpGet("")]
        public IEnumerable<Category> Get() => DB.Category;
    }
    
    [Route("card")]//корзина
    public class Cards : ControllerBase
    {
        [HttpGet("{id?}")]
        public IEnumerable<CurrentCard> Get(int? id)
        {
            return DB.CCards.Where(c => c.UserId == id);
        }
        
        public static SpeedoDB SpeedoDb { get; set; } = new SpeedoDB();

        [HttpPost]
        public IActionResult AddToCard([FromBody] SaveCard data)
        {
            var card = new Card
            {
                UserId = data.UserId,
                ProductId = data.ProductId,
                Amount = data.Amount
            };

            SpeedoDb.Cards.Value(p => p.UserId, card.UserId)
                .Value(p => p.ProductId, card.ProductId)
                .Value(p => p.Amount, card.Amount)
                .Insert();
            
            return Ok();
        }
        
        [HttpDelete("{id?}")]
        public IEnumerable<CurrentCard> DeleteFromCard(int? id)
        {
            SpeedoDb.Cards.Where(c => c.Id == id).Delete();

            return DB.CCards.Where(c => c.UserId == 1);
        }
    }
}