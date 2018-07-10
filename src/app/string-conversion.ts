export function camelCaseToUpperCaseSpaced(input: string): string {
  let output: string = '';
  for (let char of input) {
    if (char.toUpperCase() == char && output != '') {
      output += ' ';
    }
    output += char;
  }
  return output;
}
