export interface TodoStateInterface {
  counter: number,
  test: string,
}

export default (): TodoStateInterface => {
  return {
    counter: 0,
    test: 'aaa'
  }
}
