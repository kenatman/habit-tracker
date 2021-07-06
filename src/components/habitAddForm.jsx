import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
    // 인풋 초기화 다른방법...
    // this.inputRef.current.value = "";
  };

  render() {
    console.log(`form`);
    return (
      <form
        ref={this.formRef}
        className="add-form"
        onSubmit={this.handleSubmit}
      >
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Enter your habits..."
        ></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
