using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Gestionaire_location.Models;
using DayPilot.AspNetCore;
using DayPilot.AspNetCore.Enums;
using DayPilot.AspNetCore.Events.Scheduler;
using System.Data;

namespace Gestionaire_location.Controllers
{
    public class ReservationsController : Controller
    {
        private readonly Gestionnaire_locationContext _context;

        public ReservationsController(Gestionnaire_locationContext context)
        {
            _context = context;    
        }

        // GET: Reservations
        public async Task<IActionResult> Index()
        {
            return View(await _context.Reservation.ToListAsync());
        }


       public IActionResult Light()
        {
            return View();
        }


        public IActionResult Backend()
        {
            return new Dps(_context).CallBack(this);
        }

   


        // GET: Reservations/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var reservation = await _context.Reservation
                .SingleOrDefaultAsync(m => m.Id == id);
            if (reservation == null)
            {
                return NotFound();
            }

            return View(reservation);
        }

        // GET: Reservations/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Reservations/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,DateDebut,DateFin,Text")] Reservation reservation)
        {
            if (ModelState.IsValid)
            {
                _context.Add(reservation);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(reservation);
        }

        // GET: Reservations/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var reservation = await _context.Reservation.SingleOrDefaultAsync(m => m.Id == id);
            if (reservation == null)
            {
                return NotFound();
            }
            return View(reservation);
        }

        // POST: Reservations/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,DateDebut,DateFin,Text")] Reservation reservation)
        {
            if (id != reservation.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(reservation);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ReservationExists(reservation.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                
            }
            
            return View(reservation);
        }

        // GET: Reservations/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var reservation = await _context.Reservation
                .SingleOrDefaultAsync(m => m.Id == id);
            if (reservation == null)
            {
                return NotFound();
            }

            return View(reservation);
        }

        // POST: Reservations/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var reservation = await _context.Reservation.SingleOrDefaultAsync(m => m.Id == id);
            _context.Reservation.Remove(reservation);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        private bool ReservationExists(int id)
        {
            return _context.Reservation.Any(e => e.Id == id);
        }

    }

    public class Dps : DayPilotScheduler
    {
        private readonly Gestionnaire_locationContext _context;
       
        public Dps(Gestionnaire_locationContext context)
        {
            _context = context;
    
        }

        protected override void OnInit(InitArgs e)
        {
            var reservations = _context.Reservation.ToList();
            Events = new List<EventData>();
            var myEvents = new List<EventData>();
            foreach (var reservation in  reservations)
            {
                Resources.Add(reservation.Text, reservation.Id.ToString());
                myEvents.Add( new EventData() { Id = reservation.Id.ToString(), Resource = reservation.Id.ToString(), Start = reservation.DateDebut , End = reservation.DateFin, Text = reservation.Text });
            }

            Events = myEvents;

            DataIdField = "Id";
            DataStartField = "Start";
            DataEndField = "End";
            DataResourceField = "Resource";
            DataTextField = "Text";
            OnEventDoubleClick();
            
            

            StartDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, 1);
            Days = 31;

            Scale = TimeScale.Day;

            TimeHeaders = new TimeHeaderCollection()
            {
                new TimeHeader(GroupBy.Month),
                new TimeHeader(GroupBy.Day)
            };

            Update(CallBackUpdateType.Full);
        }

        private string  OnEventDoubleClick()
        {
            return "test";
        }

        protected override void OnEventMove(EventMoveArgs e)
        {
            var item = _context.Reservation
                .SingleOrDefault(m => m.Id == Convert.ToInt32(e.Id));
            
            if (item != null)
            {
                item.DateDebut = e.NewStart;
                item.DateFin = e.NewEnd;
                _context.Update(item);
                _context.SaveChanges();
            }
        }

        protected override void OnCommand(CommandArgs e)
        {
            switch (e.Command)
            {
                case "previous":
                    StartDate = StartDate.AddMonths(-1);
                    LoadData();
                    Update(CallBackUpdateType.Full);
                    break;
                case "today":
                    StartDate = DateTime.Today;
                    LoadData();
                    Update(CallBackUpdateType.Full);
                    break;
                case "next":
                    StartDate = StartDate.AddMonths(1);
                    LoadData();
                    Update(CallBackUpdateType.Full);
                    break;
                case "refresh":
                    LoadData();
                    UpdateWithMessage("Refreshed", CallBackUpdateType.Full);
                    break;
            }
        }

        private void LoadData()
        {
            Resources = new ResourceCollection();
            var reservations = _context.Reservation.ToList();
            Events = new List<EventData>();
            var myEvents = new List<EventData>();
            foreach (var reservation in reservations)
            {
                Resources.Add(reservation.Text, reservation.Id.ToString());
                myEvents.Add(new EventData() { Id = reservation.Id.ToString(), Resource = reservation.Id.ToString(), Start = reservation.DateDebut, End = reservation.DateFin, Text = reservation.Text });
            }

            Events = myEvents;
            DataIdField = "Id";
            DataStartField = "Start";
            DataEndField = "End";
            DataResourceField = "Resource";
            DataTextField = "Text";

            Scale = TimeScale.Day;

            TimeHeaders = new TimeHeaderCollection()
            {
                new TimeHeader(GroupBy.Month),
                new TimeHeader(GroupBy.Day)
            };
        }
    }

    public class EventData
    {
        public string Id;
        public string Resource;
        public DateTime Start;
        public DateTime End;
        public string Text;
    }
}
