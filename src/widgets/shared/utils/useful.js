export const NAME = "____name____";
export const OBJECT_OBJECT = "[object Object]";
export const lowKeyValidation = (props) => {
  const { data, labelFieldName, valueFieldName } = props;
  if (!data)
    console.error(
      "You have not provided any 'data'. 'data' should be an array of [string || object]"
    );
  const anyElem = data[0];

  const elemExistsAndIsObj = anyElem && anyElem.toString() === OBJECT_OBJECT;
  if (elemExistsAndIsObj && !labelFieldName)
    console.error(
      "Provide the 'labeldFieldName' and field if you pass an array of Objects into 'data' "
    );

  if (elemExistsAndIsObj && !valueFieldName)
    console.warn(
      "You did not provide a 'valueFieldName', so your 'labelFieldName' will be used... "
    );
};
