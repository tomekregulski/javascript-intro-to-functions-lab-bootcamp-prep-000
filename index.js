function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logshout(string) {
  console.log(string.toUpperCase());
}

function logwhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === "I love you") {
    return ("I love you, too.");
  } else if (string === "HELLO") {
    return ("YES INDEED!");
  } else {
    return ("I can't hear you!");
  }
}
