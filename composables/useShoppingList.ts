export const useShoppingList = () => {
  const shoppingList = useState<string[]>('shopping-list', () => [])

  const addItemToShoppingList = (ingredient: string) => {
    if (!shoppingList.value.includes(ingredient)) {
      shoppingList.value.push(ingredient)
    }
  }

  return { shoppingList, addItemToShoppingList }
}
