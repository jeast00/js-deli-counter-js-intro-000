function takeANumber(lineNumber, name) {
  lineNumber.push(name);
  return `Welcome, ${name}. You are number ${lineNumber.length} in line.`;
}


function nowServing(lineNumber) {
  return `Currently serving ${lineNumber}`;
