function getNumber() {
  return Math.floor(Math.random() * 10);
}
class Hello extends React.Component{
  render() {
    let num = getNumber();
    let msg = null;
    if (num % 2 == 1) {
      msg = 
        <div>
          <h1>You are odd!!!</h1>
          <img src="https://media.giphy.com/media/kbuuIuoFzksMK6QzlI/giphy.gif" />
        </div>
    } else {
      {
        msg =
          <div>
            <h1>You are even!!!</h1>
            <img src="https://media.giphy.com/media/2fLgzU6ZNbqgj1jJy2/giphy.gif" />
          </div>
      }
    }
    return (
      <div>
        <h1>My number is : {num}</h1>
        {msg}
        {/*<h1>{num === 7 ? "Lucky" : "Boom!!"}</h1>
        {num === 7 ? 
          <img src="https://media.giphy.com/media/kbuuIuoFzksMK6QzlI/giphy.gif" />
          : <img src="https://media.giphy.com/media/2fLgzU6ZNbqgj1jJy2/giphy.gif" />
        }*/}
      </div> 
    )
  }
}

ReactDOM.render(<Hello />, document.querySelector("#root"));
