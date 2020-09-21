function getMyMoode() {
  let moods = ['Hungry', "Angry", "Funny", 'Happy', "Joking"];
  return moods[Math.floor(Math.random() * moods.length)];
}
class Hello extends React.Component{
  render() {
    return (
      <div>
        <h1>Sum of 5 + 6 is : {5 + 6}</h1>
        <h2>My mood is : {getMyMoode()}</h2>
        <img src= "https://www.iamabiker.com/wp-content/uploads/2019/09/Honda-2020-CRF1100L-Africa-Twin-HD-wallpaper.jpg" width="1000" />
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.querySelector("#root"));
