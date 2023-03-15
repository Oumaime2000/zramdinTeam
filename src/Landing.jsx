import { useState } from "react";

const Landing = () => {
  const [open, setOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [player, setplayer] = useState("");
  const [array, setarray] = useState([])

  const changeValue = (e) => {
    e.preventDefault();
    setOpenList(false);
    setOpen(!open);
  };
  const changeValueList = (e) => {
    e.preventDefault();
    setOpen(false);
    setOpenList(!openList);
  };
  const addvluelist =() =>{
     array.push(player)
     console.log(array);
  }
  return (
    <div className="header">
      <div className="navbar">
        <a href="" onClick={changeValue} class="button">
          contact
        </a>
        <a href="" onClick={changeValueList} class="button">
          players lists
        </a>
      </div>
      {openList ? (
        <div className="modalList">
          <div className="modalHead">
            <h1>List des J</h1>
            <a href="#" onClick={changeValueList} class="btnx">
              X
            </a>
          </div>
          <div className="modalBody">
            <div className="liste">
              <table className="table">
                <tr className="tr">
                  <th className="th">Company</th>
                </tr>
                {array.map((name) => {
                  return (
                    <tr className="tr">
                      <td className="td">{name}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="inptsection">
              <input
                className="input"
                type="text"
                onChange={(e) => setplayer(e.target.value)}
                placeholder="full name"
              />
            </div>
          </div>
          <div className="modalFooter">
            <button className="btn"> send</button>
            <button onClick={addvluelist} className="btn"> addplayer</button>
          </div>
        </div>
      ) : null}
      {open ? (
        <div className="modalContact">
          <div className="modalHead">
            <h1>send us a message</h1>
            <a href="#" onClick={changeValue} class="btnx">
              X
            </a>
          </div>
          <div className="modalBody">
            <input className="inpt" type="text" placeholder="full name" />
            <input className="inpt" type="email" placeholder="your email" />
            <input className="inpt" type="number" placeholder="number" />
            <input
              className="inpt"
              type="textarea"
              placeholder="your message"
            />
          </div>
          <div className="modalFooter">
            <button className="btn"> send</button>
          </div>
        </div>
      ) : null}
      <div className="adresstitle">
        <h4 className="adress"> Cité El Agba 5000 Monastir </h4>
        <h5 className="title">Basketball training</h5>
      </div>
    </div>
  );
};

export default Landing;
