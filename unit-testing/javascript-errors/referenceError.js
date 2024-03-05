// Folgender Code wirft einen ReferenceError

try {
meineLieblingsFunktion();
} catch (error) {
    console.log("Ein Fehler ist aufgetreten: " + error.message);
  } finally {
    console.log("Die Verarbeitung wurde abgeschlossen.");
  }