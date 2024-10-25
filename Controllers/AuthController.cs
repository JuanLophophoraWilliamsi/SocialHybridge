﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialHybridge.Data;
using SocialHybridge.Models;
using System.Linq;
using System.Threading.Tasks;

namespace SocialHybridge.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            var existingUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == user.Username);
            if (existingUser != null)
            {
                return Conflict(new { message = "Username already exists" });
            }

            user.IsNewUser = true;
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User loginUser)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == loginUser.Username && u.Password == loginUser.Password);
            if (user == null)
                return Unauthorized();

            // Hacer una copia del usuario antes de cambiar IsNewUser a false
            var userCopy = new User
            {
                Id = user.Id,
                Username = user.Username,
                Password = user.Password,
                IsNewUser = user.IsNewUser
            };

            // Cambiar IsNewUser a false y guardar los cambios
            user.IsNewUser = false;
            await _context.SaveChangesAsync();

            // Devolver la copia del usuario
            return Ok(userCopy);
        }
    }
}

