export const NAME = "____name____";
export const OBJECT_OBJECT = "[object Object]";
export const lowKeyValidation = props => {
  const { data, labelFieldName, valueFieldName } = props;
  if (!data)
    console.error(
      "You have not provided any 'data'. 'data' should be an array of [string || object]"
    );
  const anyElem = data[0];

  if (
    anyElem &&
    anyElem.toString() === OBJECT_OBJECT &&
    (!labelFieldName || !valueFieldName)
  )
    console.error(
      "Provide the 'labeldFieldName' and 'valueFieldName' field if you pass an array of Objects into 'data' "
    );
}
