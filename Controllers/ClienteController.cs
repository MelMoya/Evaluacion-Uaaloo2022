using Uaaloo_api2022.Models;
using Uaaloo_api2022.Services;
using Microsoft.AspNetCore.Mvc;

namespace Uaaloo_api2022.Controllers;

[ApiController]
[Route("[controller]")]
public class ClienteController : ControllerBase
{
    public ClienteController()
    {
    }

    [HttpGet]
    public ActionResult<List<Cliente>> GetAll() =>
    ClienteServ.GetAll();


    [HttpGet("{id}")]
    public ActionResult<Cliente> Get(int id)
    {
        var cliente = ClienteServ.Get(id);

        if (cliente == null)
            return NotFound();

        return cliente;
    }


    [HttpPost]
    public IActionResult Create(Cliente cliente)
    {
        ClienteServ.Add(cliente);
        return CreatedAtAction(nameof(Create), new { id = cliente.id }, cliente);
    }


    [HttpPut("{id}")]
    public IActionResult Update(int id, Cliente cliente)
    {
        if (id != cliente.id)
            return BadRequest();

        var existingCliente = ClienteServ.Get(id);
        if (existingCliente is null)
            return NotFound();

        ClienteServ.Update(cliente);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var cliente = ClienteServ.Get(id);

        if (cliente is null)
            return NotFound();

        ClienteServ.Delete(id);

        return NoContent();
    }
}

