import React from 'react'
import { useStore } from '../../utils/store'

export const recipientSelectTestId = 'recipientSelectTestId'
export const recipientSelectOptionTestId = 'recipientSelectOptionTestId'

function RecipientSelect() {
  const { recipientId, recipientIds, setRecipientId, fetchRecipientIds } = useStore()

  React.useEffect(() => {
    fetchRecipientIds()
  }, [fetchRecipientIds])

  React.useEffect(() => {
    setRecipientId(recipientIds[0])
  }, [setRecipientId, recipientIds])

  function handleChange(
    e: React.SyntheticEvent
  ) {
    // as usual, forms are pretty damn annoying. Just ignore this 🤦🏻‍♀️
    // @ts-ignore
    setRecipientId(e.target.value);
  }


  return (
    <select data-testid={recipientSelectTestId} value={recipientId || ""} onChange={handleChange}>
      {recipientIds.map(uuid => <option key={uuid} data-testid={recipientSelectOptionTestId} value={uuid}>{uuid}</option>)}
    </select>
  )
}

export default React.memo(RecipientSelect);