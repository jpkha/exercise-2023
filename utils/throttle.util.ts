
export const throttle = ( cb: () => void, delay: number ) => {
  let shouldWait = false
  return () => {
    if ( !shouldWait ) {
      cb()
    }
    shouldWait = true
    setTimeout( () => {
      shouldWait = false;
    }, delay )
  }
}