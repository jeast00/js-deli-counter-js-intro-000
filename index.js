function takeANumber(lineNumber, name) {
  lineNumber.push(name);
  return `Welcome, ${name}. You are number ${lineNumber.length} in line.`;
}


function nowServing(lineNumber) {
  if(lineNumber.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${lineNumber.shift()}.`;
  }
}


function currentLine(line) {
  if(line.length === 0) {
    return `The line is currently empty.`;
  }
  return `The line is currently: ${line.length}. ${line}`;
}
