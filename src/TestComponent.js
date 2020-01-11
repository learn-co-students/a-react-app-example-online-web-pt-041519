import React, { Component } from 'react';

// no need to modify anything in here. The final test is looking for the returned JSX from this component
class TestComponent extends Component {
  render() {
    return (
      <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5TbUxGZtwGI" frameBorder="0" allow="autoplay; encrypted-media" title="time video" allowFullScreen></iframe>
      </div>
    );
  }
}

export default TestComponent;


class NewComponent extends Component {
    render() {
      return (
        <div >
          <iframe width="60" height="35" src="https://www.youtube.com/embed/1YQV3kggWKI" frameBorder="0" allow="autoplay; encrypted-media" title="time video" allowFullScreen></iframe>
        </div>
      );
    }
  }
  
 
 