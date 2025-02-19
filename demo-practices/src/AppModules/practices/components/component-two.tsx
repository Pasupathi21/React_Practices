import { useContext, useState, useEffect } from 'react'
import { UserDataContext } from '../index'
import { FirstComponentContext }from './component-one'
function ComponentTwo({ 
    title,
    handleInputChange 
}: any) {
  const userContextData = useContext(UserDataContext) as any []
  const firstComponentContext = useContext(FirstComponentContext) as any
  const [state, setState]: any = useState(userContextData?.length ? userContextData : [])
  useEffect(() => {
    console.log("ComponentTwo side effect")
    setState(userContextData)
  }, [
    userContextData
  ])
  console.log("ComponentTwo ", state)
  return (
    <>
      <h2>Component Two</h2>
      {title && (
        <p>
          Component One : <b>{title}</b>{" "}
        </p>
      )}
      <input 
      type="text" 
      name="title" 
      value={title} 
    //   child to parent state update
      onChange={handleInputChange}/>
      <div>
        Component One Value: {firstComponentContext}
      </div>
      <p>User count: {state?.length }</p>
      {
        state?.map((item: Record<string, any>) => (
          <p key={item?.name}> <b>{item?.name}</b> </p>
        ))
      }
    </>
  );
}

export default ComponentTwo;
