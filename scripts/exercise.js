// Dieser Code definiert eine Funktion namens "answer", die verwendet wird, um zu überprüfen,
// ob eine ausgewählte Antwort richtig oder falsch ist.
// Die Funktion wird aufgerufen, wenn der Benutzer eine Antwort auswählt, zum Beispiel in einem Quiz.

function answer(selection) {
  // Hier wird die aktuelle Frage aus einem Array namens "questions" abgerufen,
  // das vermutlich eine Liste aller Fragen enthält.
  // "currentQuestion" ist ein Index, der angibt, welche Frage gerade angezeigt wird.
  let question = questions[currentQuestion];

  // Die vom Benutzer ausgewählte Antwort wird zur Kontrolle in der Konsole ausgegeben.
  console.log("selceted answer is", selection);

  // Die Variable "selcetedQuestionNumber" speichert die letzte Zahl im String "selection".
  // Zum Beispiel, wenn "selection" "answer3" ist, dann wäre "selcetedQuestionNumber" der Wert "3".
  let selcetedQuestionNumber = selection.slice(-1);

  // Die ausgewählte Nummer wird ebenfalls in der Konsole ausgegeben.
  console.log("selcetedQuestionNumber is ", selcetedQuestionNumber);

  // Die richtige Antwort für die aktuelle Frage wird aus dem "question" Objekt abgerufen und in der Konsole angezeigt.
  console.log("Current question is", question["right_answer"]);

  // Überprüfung, ob die ausgewählte Antwortnummer gleich der richtigen Antwort ist.
  // Wenn ja, wird "Richtige Antwort!" ausgegeben, ansonsten "Falsche Antwort!".
  if (selcetedQuestionNumber == question["right_answer"]) {
    console.log("Richtige Antwort!");
  } else {
    console.log("Falsche Antwort!");
  }
}

/*
  Zusammenfassung:
  - Die Funktion "answer" überprüft, ob die vom Benutzer ausgewählte Antwort die richtige ist.
  - Die Variable "selection" enthält die Information, welche Antwort gewählt wurde (z.B. "answer3").
  - "selection.slice(-1)" holt die letzte Ziffer, um zu sehen, welche Antwortnummer gewählt wurde.
  - Dann wird überprüft, ob diese Nummer mit der "right_answer" für die aktuelle Frage übereinstimmt.
  - Wenn die Antwort richtig ist, gibt die Konsole "Richtige Antwort!" aus, ansonsten "Falsche Antwort!".
  */
