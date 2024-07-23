function Arr(){
    const items = ['Mango', 'Apple', 'Banana', 'Cherry'];
    const itemslist = items.map((item, index) => (<li key={index}>{item}</li>))
    return (
      <div>
        <h1>Array List</h1>
        <ul>
          {itemslist}
        </ul>
      </div>
    );
  };
  
export default Arr;