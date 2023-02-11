interface StringObject {
    [key: string]: string;
}

export const allValuesNotEmpty = ( values : StringObject ) => {
    for (const key in values) {
      if (values[key] === '') {
        return false;
      }
    }
    return true;
  }
