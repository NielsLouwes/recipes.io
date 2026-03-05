export const useShoppingList = () => {
  const shoppingList = useState<string[]>('shopping-list', () => [])

  const addItemToShoppingList = (ingredient: string) => {
    if (!shoppingList.value.includes(ingredient)) {
      shoppingList.value.push(ingredient)
    }
  }

  const removeItemFromShoppingList = (ingredient: string) => {
    shoppingList.value = shoppingList.value.filter(item => item !== ingredient)
  }

  return { shoppingList, addItemToShoppingList, removeItemFromShoppingList }
}
