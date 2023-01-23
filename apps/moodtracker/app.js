//require("Storage").write("moodtracker.info", {"id":"moodtracker","name":"Mood Tracker","src":"moodtracker.app.js","icon":"moodtracker.img"});

var Layout = require("Layout");
var mood_file = require("Storage").open("mood_tracker.csv", "a");

var current_mood = -1;

function setMood(mood) {
  if (current_mood !== -1) {
    mood_layout["btn_" + current_mood].bgCol = "#fff";
    mood_layout["btn_" + current_mood].scale = 0.8;
  }
  mood_layout["btn_" + mood].bgCol = "#555";
  mood_layout["btn_" + mood].scale = 1;
  mood_layout.render();
  current_mood = mood;
}

function confirmMood() {
  if (current_mood === -1)
    return;
  csv_data = [0 | getTime(), current_mood];
  mood_file.write(csv_data.join(";") + "\n");
  Bangle.showClock();
}

function moodEmojo(x) {
  var picture;
  switch (x) {
    case 0:
      return require("heatshrink").decompress(atob("kcjwIEBh/+AYMH//wgED+EfwEB/EA/kAvgOB4EeCYM8g+ACYPA8AIBnE4jkHgeHg/B+Fx4H4n0HnEfDoPugPAuEP4AZBgI1BAAIqCE4QECvADCh4DCgPggZSBnkD//4GQP///B/F/wf8nePwEPx1xJQNx484gEOuHnEIPOhwzCwJbC+BoDIwUfAIIiBIgP8g4TBRYcAn6IBgAA=="));
    case 1:
      return require("heatshrink").decompress(atob("kcjwIEBh/+AYMH//wgED+EfwEB/EA/kAvgOB4EeCYM8g+ACYPA8AIBnE4jkHgeHg/B+Fx4H4n0HnEfDoPugPAuEP4AZBgI1BAAIqCE4QECvADCh4DCgIzCHoMA//gGQP///B/F///8neP8E/xw9BgFx44ZCuAeCh0OGYWBBAXwNAZGCj4BBwBRC/kHCYKLDgE/RAMAA="));
    case 2:
      return require("heatshrink").decompress(atob("kcjwIEBh/+AYMH//wgED+EfwEB/EA/kAvgOB4EeCYM8g+ACYPA8AIBnE4jkHgeHg/B+Fx4H4n0HnEfDoPugPAuEP4AZBgI1BAAIqCE4QECvADCh4DCgIzCHoIDCFAIMC/F///8neP///x1xAYPx44VCuAeCh0OGYWBBAXwNAZGCj4BBwBRC/kHCYKLDgE/RAMAA="));
    case 3:
      return require("heatshrink").decompress(atob("kcjwIEBh/+AYMH//wgED+EfwEB/EA/kAvgOB4EeCYM8g+ACYPA8AIBnE4jkHgeHg/B+Fx4H4n0HnEfDoPugPAuEP4AZBgI1BAAIqCE4QECvADCh4DCgIzCHoIDCFAIMC/FwgEcneP8E/x1x///+PHj///lwBYP8h0OGYWBE4XwNAZGCj4BBwBRC/kHCYKLDgE/RAMAA="));
    case 4:
      return require("heatshrink").decompress(atob("kcjwIEBh/+AYMH//wgED+EfwEB/EA/kAvgOB4EeCYM8g+ACYPA8AIBnE4jkHgeHg/B+Fx4H4n0HnEfDoPugPAuEP4AZBgI1BAAIqCE4QECvADCh4DCgIzCHoMcIoMH4ZBB8P4uEAjk7x+Ag+OuP8gfx48f//8uHg///h0OOIODwInC+BoDIwUfAIOAKIX8g4TBRYcAn6IBgA"));

  }
}

var mood_layout = new Layout({
  type: "v",
  c: [{
      type: "txt",
      font: "6x8:2",
      label: "Current Mood",
      id: "mood"
    },
    {
      type: "h",
      c: [{
          type: "btn",
          id: "btn_0",
          cb: l => setMood(0),
          src: l => moodEmojo(0),
          scale: 0.8,
          fillx: 1
        },
        {
          type: "btn",
          id: "btn_1",
          cb: l => setMood(1),
          src: l => moodEmojo(1),
          scale: 0.8,
          fillx: 1
        },
        {
          type: "btn",
          id: "btn_2",
          cb: l => setMood(2),
          src: l => moodEmojo(2),
          scale: 0.8,
          fillx: 1
        },
        {
          type: "btn",
          id: "btn_3",
          cb: l => setMood(3),
          src: l => moodEmojo(3),
          scale: 0.8,
          fillx: 1
        },
        {
          type: "btn",
          id: "btn_4",
          cb: l => setMood(4),
          src: l => moodEmojo(4),
          scale: 0.8,
          fillx: 1
        },
      ]
    },
    {
      type: "h",
      c: [{
          type: "btn",
          id: "btn_cancel",
          label: "Cancel",
          cb: Bangle.showClock,
          fillx: 1
        },
        {
          type: "btn",
          id: "btn_confirm",
          label: "Confirm",
          cb: confirmMood,
          fillx: 1
        },
      ],
      height:50
    }
  ]
}, {
  lazy: true
});

Bangle.loadWidgets();
g.clear();
mood_layout.render();
Bangle.drawWidgets();