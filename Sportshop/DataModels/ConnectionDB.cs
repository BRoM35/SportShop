using System.Collections.Generic;
using System.Linq;
using LinqToDB.Configuration;

namespace DataModels
{
    public class ConnectionStringSettings : IConnectionStringSettings
    {
        public string ConnectionString { get; set; }
        public string Name { get; set; }
        public string ProviderName { get; set; }
        public bool IsGlobal => false;
    }

    public class ConnectionDB : ILinqToDBSettings
    {
        public IEnumerable<IDataProviderSettings> DataProviders => Enumerable.Empty<IDataProviderSettings>();

        public string DefaultConfiguration => "PostgreSQL";
        public string DefaultDataProvider => "PostgreSQL";

        public IEnumerable<IConnectionStringSettings> ConnectionStrings
        {
            get
            {
                yield return
                    new ConnectionStringSettings
                    {
                        Name = "requests",
                        ProviderName = "PostgreSQL",
                        ConnectionString = @"User ID=admin;Password=qwer1234;Host=localhost;Port=5432;Database=speedo"
                    };
            }
        }
    }
}