function ComponentTwo({ 
    title,
    handleInputChange 
}: any) {
    console.log("ComponentTwo ", Date.now())
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
    </>
  );
}

export default ComponentTwo;
