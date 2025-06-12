export function callParentFunction(payload: string) {
  console.log("calling parent function");
  window.parent.postMessage(
    {
      type: 'CALL_PARENT_FUNCTION',
      data: payload,
    },
    '*'
  );
}