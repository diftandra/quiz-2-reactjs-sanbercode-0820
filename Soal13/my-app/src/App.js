import React from 'react';
import './App.css';

class Frame extends React.Component {
  render() {
    return (
      <div className="frame">
          <FramePhoto photo={this.props.photo}/>
          <FrameDetail name={this.props.name} profession={this.props.profession} age={this.props.age}/>
      </div>
    )
  }
}

class FramePhoto extends React.Component {
  render() {
    return (
      <>
        <img className="framePhoto" src={this.props.photo}/>
      </>
    )
  }
}

class FrameDetail extends React.Component {
  render() {
    return (
      <>
        <div className="frameDetail"><b>{this.props.name}</b></div>
        <div className="frameDetail">{this.props.profession}</div>
        <div className="frameDetail">{this.props.age}</div>
      </>
    )
  }
}

class ProfileFrames extends React.Component {
  render() {
    const data = [
      { name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745" }, 
      { name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg" }, 
      { name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756" }, 
      { name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
    ]
    return (
      <div className="profileFrames">
        <div className="upperProfileFrames">
          {data.map((el, i) => {
            if(i < 2) {
              return (
                <Frame photo={el.photo} name={el.gender === "Male" ? `Mr. ${el.name}` : `Mrs. ${el.name}`} profession={el.profession} age={`${el.age} years old`} />
              )
            }
          })}
        </div>
        <div className="lowerProfileFrames">
          {data.map((el, i) => {
            if(i >= 2) {
              return (
                <Frame photo={el.photo} name={el.gender === "Male" ? `Mr. ${el.name}` : `Mrs. ${el.name}`} profession={el.profession} age={`${el.age} years old`} />
              )
            }
          })}
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <ProfileFrames />
  );
}

export default App;
