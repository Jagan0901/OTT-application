import { useState } from 'react';



function AddColor() {

  const [color, setColor] = useState("green");
  // const [colorList,setColorList] = useState( ['red','orange','lightGreen'])
  const [colorList, setColorList] = useState([]);
  const styles = {
    fontSize: '20px',
    backgroundColor: color,
    margin: '15px',
    width: '300px',
  };
  return (
    <div className='center'>
      <div className='add-color'>
        <input onChange={(event) => setColor(event.target.value)}
          type="text" style={styles}
          placeholder="Enter a color"
          className='input-color'
          value={color} />
        <button onClick={() => {
          colorList.push(color);
          setColorList([...colorList]);
          // console.log([...colorList])
        }} className='color-button'>Add color</button>
      </div>
      <div className='box'>
        {colorList.map((clr) => (
          <ColorBox color={clr} />
        ))}
      </div>

    </div>
  );
}



function ColorBox({ color }) {


  const styles = {
    height: '30px',
    width: '300px',
    backgroundColor: color,
    marginTop: '10px',
  };

  return (
    <div className='color-box' style={styles}>
    </div>
  );
}



export {AddColor}