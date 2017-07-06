using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using EFGetStarted.AspNetCore.ExistingDb.Models;

namespace EFGetStarted.AspNetCore.ExistingDb.Controllers
{
    public class LocatairesController : Controller
    {
        private readonly LocataireContext _context;

        public LocatairesController(LocataireContext context)
        {
            _context = context;    
        }

        // GET: Locataires
        public async Task<IActionResult> Index()
        {
            return View(await _context.Locataires.ToListAsync());
        }

        // GET: Locataires/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var locataires = await _context.Locataires
                .SingleOrDefaultAsync(m => m.Id == id);
            if (locataires == null)
            {
                return NotFound();
            }

            return View(locataires);
        }

        // GET: Locataires/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Locataires/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Nom,Prenom,Age")] Locataires locataires)
        {
            if (ModelState.IsValid)
            {
                _context.Add(locataires);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(locataires);
        }

        // GET: Locataires/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var locataires = await _context.Locataires.SingleOrDefaultAsync(m => m.Id == id);
            if (locataires == null)
            {
                return NotFound();
            }
            return View(locataires);
        }

        // POST: Locataires/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Nom,Prenom,Age")] Locataires locataires)
        {
            if (id != locataires.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(locataires);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!LocatairesExists(locataires.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("Index");
            }
            return View(locataires);
        }

        // GET: Locataires/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var locataires = await _context.Locataires
                .SingleOrDefaultAsync(m => m.Id == id);
            if (locataires == null)
            {
                return NotFound();
            }

            return View(locataires);
        }

        // POST: Locataires/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var locataires = await _context.Locataires.SingleOrDefaultAsync(m => m.Id == id);
            _context.Locataires.Remove(locataires);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        private bool LocatairesExists(int id)
        {
            return _context.Locataires.Any(e => e.Id == id);
        }
    }
}
