function takeANumber(lineNumber, name) {
  lineNumber.push(name);
  return `Welcome, ${name}. You are number ${lineNumber.length} in line.`;
}


function nowServing(lineNumber) {
  lineNumber.shift();
  if(lineNumber.length < 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${lineNumber}`;
  }
}
