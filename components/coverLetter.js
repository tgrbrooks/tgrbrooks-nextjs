import styles from '../styles/cover.module.scss'
import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { FormControl } from 'react-bootstrap';

class CoverLetter extends Component {

  constructor(props) {
    super(props);
    this.state = { addressText: "", dateText: "", startText: "", letterText: "", endText: "", modelValue: 1 }
    this.inputRef = React.createRef();
    this.workerRef = React.createRef();
    this.startWorker = this.startWorker.bind(this);
    this.stopWorker = this.stopWorker.bind(this);
  }

  // Start the web worker
  startWorker() {
    var sentence_count = 0;
    var date = new Date();
    // Clear everything
    this.setState({ addressText: "The Best Company\nA Great City\nA Wonderful Country" });
    this.setState({ dateText: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() });
    this.setState({ startText: "Dear Recruiter," });
    this.setState({ letterText: "" });
    this.setState({ endText: "" });

    if (typeof (Worker) !== "undefined") {
      if (this.state.modelValue == 2) {
        this.workerRef.current = new Worker('../lib/charWorker.js', { type: 'module' });
      }
      else {
        this.workerRef.current = new Worker('../lib/wordWorker.js', { type: 'module' });
      }
      var txt = this.inputRef.current.value;
      this.workerRef.current.postMessage(txt);
      txt = "I am writing to apply for the role of " + txt + ".";
      this.setState({ letterText: txt });
      this.workerRef.current.onmessage = function (event) {
        if (event.data == " i") {
          sentence_count += 1;
          this.setState({ letterText: this.state.letterText + "." })
          if (sentence_count > 3) {
            sentence_count = 0;
            this.setState({ letterText: this.state.letterText + "\n\n" })
          }
          else {
            this.setState({ letterText: this.state.letterText + " " })
          }
          this.setState({ letterText: this.state.letterText + "I" })
        }
        else if (event.data == ".") {
          this.setState({ letterText: this.state.letterText + event.data })
          sentence_count += 1;
          if (sentence_count > 3) {
            sentence_count = 0;
            this.setState({ letterText: this.state.letterText + "\n\n" })
          }
        }
        else if (event.data == "Yours Faithfully,") {
          this.setState({ letterText: this.state.letterText + "." });
          this.setState({ endText: "Yours Faithfully,\nTom Brooks" });
          this.workerRef.current.terminate();
          this.workerRef.current = undefined;
        }
        else {
          this.setState({ letterText: this.state.letterText + event.data })
        }
      }.bind(this);
    } else {
      this.setState({ letterText: "Sorry! No Web Worker support." })
    }
  }

  stopWorker() {
    this.workerRef.current.terminate();
    this.workerRef.current = undefined;
    this.setState({ letterText: this.state.letterText + "." });
    this.setState({ endText: "Yours Faithfully,\nTom Brooks" });
  }

  render() {
    return (
      <>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter job title"
            aria-label="Enter job title"
            aria-describedby="basic-addon2"
            ref={this.inputRef}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.startWorker}>Generate</Button>
            <Button variant="secondary" onClick={this.stopWorker}>Stop</Button>
          </InputGroup.Append>
        </InputGroup>
        <div className={styles.coverToggle}>
          <ToggleButtonGroup type="radio" name="model" defaultValue={1}>
            <ToggleButton
              value={1}
              checked={this.state.modelValue === 1}
              onChange={(e) => this.state.modelValue = e.currentTarget.value}>
              Word model
                    </ToggleButton>
            <ToggleButton
              value={2}
              checked={this.state.modelValue === 2}
              onChange={(e) => this.state.modelValue = e.currentTarget.value}>
              Char model
                    </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.coverAddress}>
            <div id="address" className={styles.addressContent}>
              {this.state.addressText.split("\n").map((i, key) => {
                return <div key={key}>{i}</div>;
              })}
            </div>
          </div>
          <div className={styles.coverDate}>
            <div id="date" className={styles.dateContent}>
              {this.state.dateText.split("\n").map((i, key) => {
                return <div key={key}>{i}</div>;
              })}
            </div>
          </div>
          <div className={styles.coverStart}>
            <div id="coverstart">
              {this.state.startText.split("\n").map((i, key) => {
                return <div key={key}>{i}</div>;
              })}
            </div>
          </div>
          <div className={styles.letterContent}>
            <div><span id="coverletter">
              {this.state.letterText.split("\n").map((i, key) => {
                return <div key={key}>{i}</div>;
              })}
            </span></div>
          </div>
          <div className={styles.coverEnd}>
            <div id="coverend">
              {this.state.endText.split("\n").map((i, key) => {
                return <div key={key}>{i}</div>;
              })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CoverLetter;