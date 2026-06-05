/* ============================================================
   BATES AVIATION — CHECKLIST SECTION DATA
   ============================================================

   HOW TO EDIT:
   - Each section is one block:  ["Title", [ "Item|ACTION", ... ]]
   - The pipe "|" separates the item name (left) from the action (right)
   - To add an item: add a new line inside the [ ... ] array, with a comma
   - To remove an item: delete the whole line
   - To add a section: copy an entire block (the `["Title", [...]]` part)
     including its trailing comma
   - To remove a section: delete the whole block, including the comma

   CATEGORY COLORS — the section header color comes from its title:
     - "Pre-Flight ..."           → blue band
     - "... Starting Engine ..."  → orange band
     - "... Takeoff" or "Climb"   → green band
     - "Cruise" / "Landing" / "Securing"  → yellow band
     - Begins with ⚠ (warning symbol)     → red band (emergencies)
   You can also paste ⚠ into a custom section title to make it red.

   AFTER EDITING:
   - Save the file
   - Re-upload to your GitHub repo (replaces the old version)
   - Live site updates within ~30 seconds
   - Existing users may need to clear their saved checks (Reset all)
     to see the new sections, since the app remembers their last state

   IMPORTANT: keep the surrounding format intact:
     - Don't remove the `const CHECKLIST_SECTIONS = [` at the top
     - Don't remove the `];` at the very bottom
     - Don't remove the commas between sections
     - Use straight quotes  "  not curly quotes  “ ”
============================================================ */

const CHECKLIST_SECTIONS = [
  /* ===== PRE-FLIGHT INSPECTION ===== */
  ["Pre-Flight \u2014 Cabin", [
    "Control Wheel Lock|REMOVE",
    "Ignition Switch|OFF",
    "Master Switch|ON",
    "Fuel Quantity Indicators|CHECK QUANTITY",
    "Lights & Strobes|ON",
    "Fuel Selector Valve|BOTH",
    "Flaps|Dump",
    "Check lights|ALL WORK",
    "Master Switch|OFF"
  ]],
  ["Pre-Flight \u2014 Empennage", [
    "Tail Tie-Down|DISCONNECT",
    "Control Surfaces|CHECK freedom & security"
  ]],
  ["Pre-Flight \u2014 Right Wing", [
    "Aileron|CHECK freedom & security",
    "Wing Tie-Down|DISCONNECT",
    "Main Wheel Tire|CHECK inflation",
    "Fuel Tank Sump Quick-Drain|SAMPLE for water / sediment / grade",
    "Fuel Quantity|CHECK visually",
    "Fuel Filler Cap|SECURE"
  ]],
  ["Pre-Flight \u2014 Nose", [
    "Engine Oil|CHECK (6 quarts+)",
    "Fuel Strainer Drain|PULL ~4 sec, check closed",
    "Propeller & Spinner|CHECK nicks & security",
    "Landing Light|CHECK condition",
    "Carburetor Air Filter|CHECK clear of debris",
    "Nose Wheel Strut & Tire|CHECK inflation",
    "Nose Tie-Down|DISCONNECT",
    "Static Source Opening (L fuselage)|CHECK clear"
  ]],
  ["Pre-Flight \u2014 Left Wing", [
    "Main Wheel Tire|CHECK inflation",
    "Fuel Tank Sump Quick-Drain|SAMPLE for water / sediment / grade",
    "Fuel Quantity|CHECK visually",
    "Fuel Filler Cap|SECURE",
    "Pitot Tube Cover|REMOVE, check opening clear",
    "Fuel Tank Vent|CHECK clear",
    "Stall Warning Opening|CHECK (suction test for horn)",
    "Wing Tie-Down|DISCONNECT",
    "Aileron|CHECK freedom & security"
  ]],

  /* ===== ENGINE START ===== */
  ["Before Starting Engine", [
    "Pre-Flight Inspection|COMPLETE",
    "Seats, Belts, Shoulder Harnesses|ADJUST & LOCK",
    "Brakes|TEST & SET",
    "Master Switch|ON",
    "Fuel Selector Valve|BOTH",
    "Radios & Electrical Equipment|OFF",
    "Circuit Breakers|CHECK IN"
  ]],
  ["Starting Engine", [
    "Mixture|RICH",
    "Carburetor Heat|COLD",
    "Master Switch|ON",
    "Prime|AS REQUIRED (2\u20136 strokes; none if warm)",
    "Throttle|OPEN 1/8\"",
    "Propeller Area|CLEAR PROP",
    "Ignition Switch|START (release at start)",
    "Oil Pressure|CHECK within 30 sec"
  ]],

  /* ===== BEFORE TAKEOFF ===== */
  ["RUN UP", [
    "Parking Brake|SET",
    "Cabin Doors & Windows|CLOSED & LOCKED",
    "Flight Controls|FREE & CORRECT",
    "Flight Instruments|SET",
    "Fuel Selector Valve|BOTH",
    "Elevator Trim|SET FOR TAKEOFF",
    "Throttle|1700 RPM",
    "Magnetos|CHECK (125 drop max / 50 diff max)",
    "Carburetor Heat|CHECK for RPM drop",
    "Engine Instruments & Ammeter|CHECK",
    "Suction Gauge|CHECK",
    "Throttle|IDLE CHECK",
    "Throttle Friction Lock|ADJUST",
    "Carb Heat|AS DESIRED",
    "Radios & Transponder|SET"
  ]],

  /* ===== TAKEOFF / CLIMB ===== */
  ["Normal Takeoff", [
    "Wing Flaps|0\u00b0 \u2014 10\u00b0",
    "Carburetor Heat|COLD",
    "Throttle|FULL OPEN",
    "Elevator Control|LIFT NOSE WHEEL at 70 MPH",
    "Climb Speed|70\u201380 MPH"
  ]],
  ["Short-Field Takeoff", [
    "Wing Flaps|10\u00b0",
    "Carburetor Heat|COLD",
    "Brakes|APPLY",
    "Throttle|FULL OPEN",
    "Mixture|RICH (lean above 3000 ft for max RPM)",
    "Brakes|RELEASE",
    "Elevator|SLIGHTLY TAIL LOW",
    "Climb Speed|65 MPH until obstacles cleared",
    "Wing Flaps|RETRACT after obstacles cleared"
  ]],
  ["Enroute Climb", [
    "Airspeed|80\u201390 MPH",
    "Throttle|FULL OPEN",
    "Mixture|FULL RICH (lean for cruise climb above 3000 ft)"
  ]],

  /* ===== CRUISE / DESCENT / LANDING ===== */
  ["Cruise", [
    "Power|2200\u20132700 RPM (no more than 75%)",
    "Elevator Trim|ADJUST",
    "Mixture|LEAN"
  ]],
  ["Let-Down", [
    "Mixture|RICH",
    "Power|AS DESIRED",
    "Carburetor Heat|AS REQUIRED to prevent icing"
  ]],
  ["Before Landing", [
    "Seats, Belts, Shoulder Harnesses|SECURE",
    "Fuel Selector Valve|BOTH",
    "Mixture|RICH",
    "Carburetor Heat|ON (full heat before closing throttle)"
  ]],
  ["Normal Landing", [
    "Airspeed|65\u201375 MPH (flaps UP)",
    "Wing Flaps|AS DESIRED (below 100 MPH)",
    "Airspeed|60\u201370 MPH (flaps DOWN)",
    "Touchdown|MAIN WHEELS FIRST",
    "Landing Roll|LOWER NOSE WHEEL GENTLY",
    "Braking|MINIMUM REQUIRED"
  ]],
  ["Go-Around", [
    "Throttle|FULL OPEN",
    "Carburetor Heat|COLD",
    "Wing Flaps|RETRACT TO 20\u00b0",
    "Climb Speed|65 MPH",
    "Wing Flaps|RETRACT slowly above safe altitude / 70 MPH"
  ]],
  ["After Landing", [
    "Wing Flaps|UP",
    "Carburetor Heat|COLD"
  ]],
  ["Securing Aircraft", [
    "Parking Brake|SET",
    "Radios & Electrical Equipment|OFF",
    "Mixture|IDLE CUT-OFF (full out)",
    "Ignition Switch|OFF",
    "Master Switch|OFF",
    "Control Lock|INSTALL",
    "Pitot Tube|COVERED",
    "Keys|IN LOCK BOX"
  ]],

  /* ===== EMERGENCY PROCEDURES \u2014 refer to POH for full details ===== */
  ["\u26a0 Engine Failure During Takeoff Run", [
    "Throttle|IDLE",
    "Brakes|APPLY",
    "Wing Flaps|RETRACT",
    "Mixture|IDLE CUT-OFF",
    "Ignition Switch|OFF",
    "Master Switch|OFF"
  ]],
  ["\u26a0 Engine Failure Immediately After Takeoff", [
    "Airspeed|70 MPH (flaps UP) / 65 MPH (flaps DOWN)",
    "Mixture|IDLE CUT-OFF",
    "Fuel Selector Valve|OFF",
    "Ignition Switch|OFF",
    "Wing Flaps|AS REQUIRED",
    "Master Switch|OFF"
  ]],
  ["\u26a0 Engine Failure During Flight", [
    "Airspeed|80 MPH (best glide)",
    "Carburetor Heat|ON",
    "Primer|IN & LOCKED",
    "Fuel Selector Valve|BOTH",
    "Mixture|RICH",
    "Ignition Switch|BOTH (or START if prop stopped)"
  ]],
  ["\u26a0 Emergency Landing Without Engine Power", [
    "Airspeed|80 MPH (flaps UP) / 70 MPH (flaps DOWN)",
    "Mixture|IDLE CUT-OFF",
    "Fuel Selector Valve|OFF",
    "Ignition Switch|OFF",
    "Wing Flaps|AS REQUIRED (40\u00b0 recommended)",
    "Master Switch|OFF",
    "Doors|UNLATCH PRIOR TO TOUCHDOWN",
    "Touchdown|SLIGHTLY TAIL LOW",
    "Brakes|APPLY HEAVILY"
  ]],
  ["\u26a0 Precautionary Landing With Engine Power", [
    "Airspeed|80 MPH",
    "Wing Flaps|20\u00b0",
    "Selected Field|FLY OVER, note terrain & obstructions",
    "Radio & Electrical Switches|OFF",
    "Wing Flaps|40\u00b0 on final",
    "Airspeed|70 MPH",
    "Master Switch|OFF",
    "Doors|UNLATCH PRIOR TO TOUCHDOWN",
    "Touchdown|SLIGHTLY TAIL LOW",
    "Ignition Switch|OFF",
    "Brakes|APPLY HEAVILY"
  ]],
  ["\u26a0 Ditching", [
    "Radio|MAYDAY on 121.5 \u2014 location & intentions",
    "Heavy Objects in Baggage|SECURE OR JETTISON",
    "Approach|INTO WIND (high wind) or PARALLEL TO SWELLS (heavy swells)",
    "Wing Flaps|40\u00b0",
    "Power|300 ft/min descent at 65 MPH",
    "Cabin Doors|UNLATCH",
    "Touchdown|LEVEL ATTITUDE at established descent rate",
    "Face|CUSHION with folded coat at touchdown",
    "ELT|ACTIVATE",
    "Airplane|EVACUATE (flood cabin via window if doors stuck)",
    "Life Vests & Raft|INFLATE"
  ]],
  ["\u26a0 Engine Fire During Start (Ground)", [
    "Cranking|CONTINUE to draw fire into engine",
    "If engine starts \u2014 Power|1700 RPM for a few minutes",
    "If engine starts \u2014 Engine|SHUTDOWN, inspect for damage",
    "If no start \u2014 Throttle|FULL OPEN",
    "If no start \u2014 Mixture|IDLE CUT-OFF",
    "If no start \u2014 Cranking|CONTINUE",
    "Fire Extinguisher|OBTAIN",
    "Master Switch|OFF",
    "Ignition Switch|OFF",
    "Fuel Selector Valve|OFF",
    "Fire|EXTINGUISH (extinguisher, wool blanket, or dirt)",
    "Aircraft|INSPECT FOR DAMAGE before next flight"
  ]],
  ["\u26a0 Engine Fire In Flight", [
    "Mixture|IDLE CUT-OFF",
    "Fuel Selector Valve|OFF",
    "Master Switch|OFF",
    "Cabin Heat & Air|OFF (except wing root vents)",
    "Airspeed|100 MPH (increase as needed to extinguish)",
    "Forced Landing|EXECUTE per emergency landing procedure"
  ]],
  ["\u26a0 Electrical Fire In Flight", [
    "Master Switch|OFF",
    "All Other Switches (except ignition)|OFF",
    "Vents / Cabin Air / Heat|CLOSED",
    "Fire Extinguisher|ACTIVATE if available",
    "If fire out \u2014 Master Switch|ON",
    "If fire out \u2014 Circuit Breakers|CHECK (do NOT reset)",
    "If fire out \u2014 Radio / Elec Switches|ON one at a time, with delay",
    "If fire out \u2014 Vents / Cabin Air / Heat|OPEN when fire confirmed out"
  ]],
  ["\u26a0 Cabin Fire", [
    "Master Switch|OFF",
    "Vents / Cabin Air / Heat|CLOSED (avoid drafts)",
    "Fire Extinguisher|ACTIVATE if available",
    "Land|AS SOON AS POSSIBLE, inspect for damage"
  ]],
  ["\u26a0 Wing Fire", [
    "Navigation Light Switch|OFF",
    "Strobe Light Switch|OFF (if installed)",
    "Pitot Heat Switch|OFF (if installed)",
    "Sideslip|AWAY from fuel tank and cabin",
    "Land|AS SOON AS POSSIBLE, flaps only as needed"
  ]],
  ["\u26a0 Inadvertent Icing Encounter", [
    "Pitot Heat|ON (if installed)",
    "Course / Altitude|CHANGE to warmer air",
    "Cabin Heat|FULL (max defroster)",
    "Throttle|OPEN to minimize prop ice",
    "Carburetor Heat|APPLY as required",
    "Landing|PLAN nearest airport",
    "Stall Speed|EXPECT HIGHER with 1/4\" leading-edge ice",
    "Wing Flaps|LEAVE RETRACTED with severe tail ice",
    "Windshield|SCRAPE clear via left window if practical",
    "Approach|Forward slip if needed for visibility",
    "Approach Speed|75\u201385 MPH (depending on ice)",
    "Touchdown|LEVEL ATTITUDE"
  ]],
  ["\u26a0 Engine Roughness / Spark Plug Fouling", [
    "Mixture|LEAN to maximum RPM",
    "If clears \u2014 Ignition Switch|BOTH",
    "If clears \u2014 Power|REDUCE",
    "If persists \u2014 Throttle|REDUCE",
    "If persists \u2014 Mixture|ADJUST",
    "Land|NEAREST AIRPORT, ignition BOTH for landing"
  ]]
];
