using Uaaloo_api2022.Models;

namespace Uaaloo_api2022.Services;

public static class ClienteServ
{
    static List<Cliente> Clientes { get; }
    static int nextId = 3;
    static ClienteServ()
    {
        Clientes = new List<Cliente>{
            new Cliente { id = 1, name = "Erika", surname = "Moya", adress = "Calle 123"},
            new Cliente { id = 2, name = "Cliente2", surname = "Apellido2", adress = "Calle 1234"}
        };
    }

    public static List<Cliente> GetAll() => Clientes;

    public static Cliente? Get(int id) => Clientes.FirstOrDefault(p => p.id == id);

    public static void Add(Cliente cliente)
    {
        cliente.id = nextId++;
        Clientes.Add(cliente);
    }

    public static void Delete(int id)
    {
        var cliente = Get(id);
        if (cliente is null)
            return;

        Clientes.Remove(cliente);
    }

    public static void Update(Cliente cliente)
    {
        var index = Clientes.FindIndex(p => p.id == cliente.id);
        if (index == -1)
            return;

        Clientes[index] = cliente;
    }
}

