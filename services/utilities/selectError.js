export default function selectError(errors, errorPath) {
  return errors.filter(({ path }) => {
    if (path.length !== errorPath.length) return false;

    for (let index = 0; index < errorPath.length; index++) {
      if (path[index] !== errorPath[index]) return false;
    }

    return true;
  })[0]?.message;
}
