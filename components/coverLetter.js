import styles from '../styles/cover.module.scss'
import React, { useState, useRef } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { FormControl } from 'react-bootstrap'

const CoverLetter = () => {
  const [addressText, setAddressText] = useState("")
  const [dateText, setDateText] = useState("")
  const [startText, setStartText] = useState("")
  const [letterText, setLetterText] = useState("")
  const [endText, setEndText] = useState("")
  const [modelValue, setModelValue] = useState(1)
  const inputRef = useRef()
  const workerRef = useRef()

  // Start the web worker
  const startWorker = () => {
    var sentence_count = 0
    var date = new Date()
    // Clear everything
    setAddressText("The Best Company\nA Great City\nA Wonderful Country")
    setDateText(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear())
    setStartText("Dear Recruiter,")
    setLetterText("")
    setEndText("")

    if (typeof (Worker) !== "undefined") {
      if (modelValue == 2) {
        workerRef.current = new Worker('../utils/charWorker.js', { type: 'module' })
      }
      else {
        workerRef.current = new Worker('../utils/wordWorker.js', { type: 'module' })
      }
      var txt = inputRef.current.value
      workerRef.current.postMessage(txt)
      txt = "I am writing to apply for the role of " + txt + "."
      setLetterText(txt)
      workerRef.current.onmessage = function (event) {
        if (event.data == " i") {
          sentence_count += 1;
          setLetterText(prev => prev + ".")
          if (sentence_count > 3) {
            sentence_count = 0;
            setLetterText(prev => prev + "\n\n")
          }
          else {
            setLetterText(prev => prev + " ")
          }
          setLetterText(prev => prev + "I")
        }
        else if (event.data == ".") {
          setLetterText(prev => prev + event.data)
          sentence_count += 1
          if (sentence_count > 3) {
            sentence_count = 0
            setLetterText(prev => prev + "\n\n")
          }
        }
        else if (event.data == "Yours Faithfully,") {
          setLetterText(prev => prev + ".")
          setEndText("Yours Faithfully,\nTom Brooks")
          workerRef.current.terminate()
          workerRef.current = undefined
        }
        else {
          setLetterText(prev => prev + event.data)
        }
      }.bind(this);
    } else {
      setLetterText("Sorry! No Web Worker support.")
    }
  }

  const stopWorker = () => {
    workerRef.current.terminate()
    workerRef.current = undefined
    setLetterText(letterText + ".")
    setEndText("Yours Faithfully,\nTom Brooks")
  }

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter job title"
          aria-label="Enter job title"
          aria-describedby="basic-addon2"
          ref={inputRef}
        />
        <InputGroup.Append>
          <Button variant="primary" onClick={startWorker}>Generate</Button>
          <Button variant="secondary" onClick={stopWorker}>Stop</Button>
        </InputGroup.Append>
      </InputGroup>
      <div className={styles.coverToggle}>
        <ToggleButtonGroup type="radio" name="model" defaultValue={1}>
          <ToggleButton
            value={1}
            checked={modelValue === 1}
            onChange={(e) => setModelValue(e.currentTarget.value)}>
            Word model
          </ToggleButton>
          <ToggleButton
            value={2}
            checked={modelValue === 2}
            onChange={(e) => setModelValue(e.currentTarget.value)}>
            Char model
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.coverAddress}>
          <div id="address" className={styles.addressContent}>
            {addressText.split("\n").map((i, key) => {
              return <div key={key}>{i}</div>;
            })}
          </div>
        </div>
        <div className={styles.coverDate}>
          <div id="date" className={styles.dateContent}>
            {dateText.split("\n").map((i, key) => {
              return <div key={key}>{i}</div>;
            })}
          </div>
        </div>
        <div className={styles.coverStart}>
          <div id="coverstart">
            {startText.split("\n").map((i, key) => {
              return <div key={key}>{i}</div>;
            })}
          </div>
        </div>
        <div className={styles.letterContent}>
          <div><span id="coverletter">
            {letterText.split("\n").map((i, key) => {
              return <div key={key}>{i}</div>;
            })}
          </span></div>
        </div>
        <div className={styles.coverEnd}>
          <div id="coverend">
            {endText.split("\n").map((i, key) => {
              return <div key={key}>{i}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CoverLetter
